import * as cv from "@techstark/opencv-js";
import {loadDataFile} from "./modelloadercas";


let msize;
msize = new cv.Size(0, 0);
let faceCascade;

export const fl = (measured_distance, real_width, width_in_rf_image) => {

    return (width_in_rf_image * measured_distance) / real_width
}

export const df = (fl, real_face_width, face_width_in_frame) => {

    return (real_face_width * fl) / face_width_in_frame
}


export function detectHaarFace(img) {

    const newImg = img;
    let w;
    const gray = new cv.Mat();
    cv.cvtColor(newImg, gray, cv.COLOR_RGBA2GRAY, 0);

    const faces = new cv.RectVector();

    // detect faces
    faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, msize, msize);
    for (let i = 0; i < faces.size(); ++i) {
        const point1 = new cv.Point(faces.get(i).x, faces.get(i).y);
        w = faces.get(i).width
        const point2 = new cv.Point(
            faces.get(i).x + faces.get(i).width,
            faces.get(i).y + faces.get(i).height
        );
        cv.rectangle(newImg, point1, point2, [255, 0, 0, 255]);
    }

    gray.delete();
    faces.delete();
    newImg.delete();

    return w;
}

export async function loadHaarFaceModels() {
    console.log("=======start downloading Haar-cascade models=======");
    return loadDataFile(
        "haarcascade_frontalface_alt.xml",
        "assets/model/haarcascade_frontalface_alt.xml"
    )
        .then(
            () =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        // load pre-trained classifiers
                        faceCascade = new cv.CascadeClassifier();
                        faceCascade.load("haarcascade_frontalface_alt.xml");
                        resolve();
                    }, 2000);
                })
        )
        .then(() => {
            console.log("=======downloaded Haar-cascade models=======");
        })
        .catch((error) => {
            console.error(error);
        });
}