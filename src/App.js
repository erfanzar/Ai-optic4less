import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

// import * as tfn from "@tensorflow/tfjs-node";
import * as model_face from '@tensorflow-models/blazeface'

const images = ['BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg', 'BottomSide.jpg', 'LeftSide.jpg', 'RightSide.jpg', 'TopSide.jpg']

const ImageShow = (onShow, index, px) => {
    if (onShow === true) {

        return (<div
            style={{
                border: '5px solid cyan',
                height: `${px + 10}px`,
                width: `${px + 10}px`,
                borderColor: 'cyan',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                color: 'cyan',
                borderRadius: '10px',
                margin: '20px',
                display: 'flex'
            }}
        ><img className='Side'
              src={`/assets/images/${images[index]}`}
              style={{
                  height: `${px}px`, width: `${px}px`, margin: '20px'
              }}
        /></div>)
    } else {
        return (<div
            style={{


                height: `${px + 10}px`, width: `${px + 10}px`,

                justifyContent: 'center', alignItems: 'center', alignSelf: 'center',

                margin: '20px', display: 'flex'
            }}
        ><img className='Side'
              src={`/assets/images/${images[index]}`}
              style={{
                  height: `${px}px`, width: `${px}px`, margin: '20px'
              }}
        /></div>)
    }
}


const TestShow = (ac, af, px) => {
    const total = ac + af
    // console.log(ac + af)
    let font = 20
    if (total <= 0) {
        return (<div style={{
            display: 'flex',

        }}>
            {ImageShow(total === 0, 0, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/200
                </p>
            </div>
        </div>)
    }
    if (total >= 1 && total < 3) {
        px /= 2
        return (<div style={{
            display: 'flex',

        }}>
            {ImageShow(total === 1, 1, px)}

            {ImageShow(total === 2, 2, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/100
                </p>
            </div>
        </div>)
    }
    if (total >= 3 && total < 6) {
        px /= 3
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 3, 3, px)}
            {ImageShow(total === 4, 4, px)}
            {ImageShow(total === 5, 5, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/70
                </p>
            </div>
        </div>)
    }
    if (total >= 6 && total < 10) {
        px /= 4
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 6, 6, px)}
            {ImageShow(total === 7, 7, px)}
            {ImageShow(total === 8, 8, px)}
            {ImageShow(total === 9, 9, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/50
                </p>
            </div>
        </div>)
    }
    if (total >= 10 && total < 15) {
        px /= 5
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 10, 10, px)}
            {ImageShow(total === 11, 11, px)}
            {ImageShow(total === 12, 12, px)}
            {ImageShow(total === 13, 13, px)}
            {ImageShow(total === 14, 14, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/40
                </p>
            </div>
        </div>)
    }
    if (total >= 14 && total < 21) {
        px /= 6
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 15, 15, px)}
            {ImageShow(total === 16, 16, px)}
            {ImageShow(total === 17, 17, px)}
            {ImageShow(total === 18, 18, px)}
            {ImageShow(total === 19, 19, px)}
            {ImageShow(total === 20, 20, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/30
                </p>
            </div>
        </div>)
    }
    if (total >= 21 && total < 28) {
        px /= 7
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 21, 21, px)}
            {ImageShow(total === 22, 22, px)}
            {ImageShow(total === 23, 23, px)}
            {ImageShow(total === 24, 24, px)}
            {ImageShow(total === 25, 25, px)}
            {ImageShow(total === 26, 26, px)}
            {ImageShow(total === 27, 27, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/20
                </p>
            </div>
        </div>)
    }
    if (total >= 28 && total < 36) {
        px /= 8
        return (<div style={{
            display: 'flex',
        }}>
            {ImageShow(total === 28, 28, px)}
            {ImageShow(total === 29, 29, px)}
            {ImageShow(total === 30, 30, px)}
            {ImageShow(total === 31, 31, px)}
            {ImageShow(total === 32, 32, px)}
            {ImageShow(total === 33, 33, px)}
            {ImageShow(total === 34, 34, px)}
            {ImageShow(total === 35, 35, px)}
            <div style={{
                display: 'flex'
            }}>
                <p style={{
                    color: 'cyan',
                    margin: '20px',
                    fontSize: `${font}px`
                }}>
                    20/10
                </p>
            </div>
        </div>)
    }
}

const Intrep = (x, xf, yf) => {
    const xv = xf[1] - xf[0]
    const xy = x - xf[0]
    const yv = yf[1] - yf[0]
    const xx = xy / xv
    return (xx * yv) + yf[0]

}


const known_distance = 70.5
const known_width = 16
const ref_image_face_width = 170

const fl = (measured_distance, real_width, width_in_rf_image) => {
    const focal_length = (width_in_rf_image * measured_distance) / real_width
    return focal_length
}

const df = (fl, real_face_width, face_width_in_frame) => {
    const distance = (real_face_width * fl) / face_width_in_frame
    return distance
}

function App() {


    const webcamRef = useRef(null);

    const [loading, set_loading] = useState(true);

    const [test_end, set_test_end] = useState(false)

    const fully_width = window.innerWidth
    const [ts, setTs] = useState([0, 0, 0])
    const [show, set_show] = useState(null)
    const [TRue, set_TRue] = useState(0)
    const [FAlse, set_FAlse] = useState(0)
    const [distance, set_Distance] = useState(null)
    const [px, set_px] = useState(null)

    const Allowed_size = 430
    const trp = 6;
    const wid = 640;
    const hig = 640;

    const time_test_run = 16000;
    // const URL = 'https://ai.optics4less.com/Model/New/model.json'
    const URL = 'https://ai.optics4less.com/Model/wsle/model.json'
    const classes_name = ['bottom', 'left', 'right', 'top']

    let end = false;
    let v = null;
    let output;
    let None_Change = 0;
    let route = 0;
    let total = [0, 0, 0];
    let gg = null;
    let focal_distance;
    focal_distance = fl(known_distance, known_width, ref_image_face_width);
    let time = 0;
    let allowed_false = 30;
    let p_false = 2

    const Detection = async (Model_Face, Model) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && typeof webcamRef.current.video !== "undefined" && gg !== null && end !== true) {
            const video = webcamRef.current.video
            const VideoWeight = webcamRef.current.video.videoWidth;
            webcamRef.current.video.height = webcamRef.current.video.videoHeight;
            webcamRef.current.video.width = VideoWeight;
            if (Model !== null) {
                const x = tf.image.resizeBilinear(tf.browser.fromPixels(video), [640, 640])
                    .div(255.0).expandDims(0).reshape([1, 640, 640, 3]);
                const pred = await Model.executeAsync(x)

                const [boxes, scores, classes, valid] = pred

                const boxes_data = boxes.dataSync();
                const scores_data = scores.dataSync();
                const classes_data = classes.dataSync();
                const valid_data = valid.dataSync()[0];

                let i;
                for (i = 0; i < valid_data; i++) {


                    if (scores_data[i].toFixed(2) > 0.4) {
                        output = await classes.dataSync()[0, i]

                        console.log(classes_name[output])
                    }
                }

                tf.dispose(pred)
                tf.dispose(boxes_data)
                tf.dispose(scores_data)
                tf.dispose(classes_data)
                tf.dispose(valid_data)
                tf.dispose(boxes)
                tf.dispose(scores)
                tf.dispose(classes)
                tf.dispose(valid)
            }
            if (Model_Face != null) {
                const predict_face = await Model_Face.estimateFaces(video, false)
                if (predict_face.length > 0) {
                    for (let i = 0; i < predict_face.length; i++) {
                        const start = predict_face[i].topLeft;
                        const end = predict_face[i].bottomRight;
                        let width_f = end[0] - start[0]

                        let dis = df(focal_distance, known_width, width_f)
                        set_Distance(Math.floor(dis))
                        // if (fully_width > Allowed_size) {
                        //     if (v === null) {
                        //         console.log('Windows or mac System');
                        //         console.log(`loaded width : ${fully_width}`);
                        //         v = true
                        //     }
                        //     if (dis * 10 < 15) {
                        //         set_Distance("Nan");
                        //     } else {
                        //         set_Distance(Math.floor(((dis * 10) * 2.6) * 1.5));
                        //     }
                        //     if (0 < Math.floor(((dis * 10) * 2.6) * 1.5) && Math.floor(((dis * 10) * 2.6) * 1.5) < 90) {
                        //         set_px(100 - (time * trp))
                        //     } else if (90 < Math.floor(((dis * 10) * 2.6) * 1.5) && Math.floor(((dis * 10) * 2.6) * 1.5) < 160) {
                        //         set_px(150 - (time * trp))
                        //     } else if (160 < Math.floor(((dis * 10) * 2.6) * 1.5) && Math.floor(((dis * 10) * 2.6) * 1.5) < 250) {
                        //         set_px(190 - (time * trp))
                        //     }
                        // }
                        // if (fully_width < Allowed_size) {
                        //     if (v === null) {
                        //         console.log('Mobile System');
                        //         console.log(`loaded width : ${fully_width}`);
                        //         v = true
                        //     }
                        //     if (dis * 10 < 15) {
                        //         set_Distance("Nan");
                        //     } else {
                        //         set_Distance(Math.floor(((dis * 10) * 1.5)));
                        //     }
                        //     if (0 < Math.floor(((dis * 10) * 2.6)) && Math.floor(((dis * 10) * 2.6)) < 90) {
                        //         set_px(100 - (time * trp))
                        //     } else if (90 < Math.floor(((dis * 10) * 2.6)) && Math.floor(((dis * 10) * 2.6)) < 160) {
                        //         set_px(150 - (time * trp))
                        //     } else if (160 < Math.floor(((dis * 10) * 2.6)) && Math.floor(((dis * 10) * 2.6)) < 250) {
                        //         set_px(190 - (time * trp))
                        //     }
                        // }
                    }
                }
            } else {
                v = true
            }


        }
    }


    const LoadModel = async () => {
        if (route === 0) {

            route = 1
            const Model_Face = await model_face.load()
            console.log('Face Model Loaded')
            const Model = await tf.loadGraphModel(URL);
            console.log("Model Loaded");
            set_loading(false)
            gg = true
            // const Model = null
            // const Model_Face = null
            setInterval(() => {
                Detection(Model_Face, Model)

            }, 100);
        }
    }

    const exam = (side) => {

        let True = 0;
        let False = 0;

        let start = Date.now();
        setInterval(() => {
            if (gg !== null && v !== null && end !== true) {
                if (side === output) {
                    True += 1
                    console.log(side)
                    if (side === 3 || side > 3) {
                        side = 0
                    } else {
                        side += 1
                    }
                    time += 1
                    if (False >= p_false) {
                        allowed_false += 1
                        p_false -= 1
                    }
                    set_show(side)
                } else {
                    let current = Date.now()
                    setInterval(() => {
                        current = Date.now()
                    }, 1)
                    if (current - start >= time_test_run) {
                        start = Date.now();
                        False += 1
                        time += 1
                        current = Date.now()
                        console.log(side)
                        if (side === 3 || side > 3) {
                            side = 0
                        } else {
                            side += 1
                        }
                        set_show(side)
                    }
                }
                total = [True, False - 1]
                setTs([True, False - 1])
                set_FAlse(False)
                set_TRue(True)
                if (False >= allowed_false) {
                    set_test_end(true)
                    end = true
                }
                if (1 > 2) {
                    console.log(total)
                }
            }
        }, 5000)
    }


    useEffect(() => {
        if (route === 0) {
            let side = 0
            set_show(side)
            LoadModel()
            exam(side)
        }
    }, [None_Change])


    if (loading === false) {
        return (<div>
                {test_end !== true && <div className='Page'>

                    <div className='result'>

                        <p className='result1'>True : {TRue}</p>
                        <p className='result2'>False : {FAlse}</p>
                        <p className='result3'>Distance : {distance} Cm </p>
                    </div>
                    <div className='ImageCorner'>
                        {TestShow(TRue, FAlse, Intrep(px, [80, 350], [100, 150]))}
                    </div>
                    <Webcam
                        ref={webcamRef}
                        height={hig}
                        width={wid}
                        mirrored={true}
                        className='camera'
                        style={{
                            height: `${300}px`, width: `${200}px`,
                        }}
                    />

                </div>}
                {test_end === true && <div className='test_end'>
                    <p className='end_result'>Test Ended</p>
                    <p className='end_result'>True : {TRue}</p>
                    <p className='end_result'>False : {FAlse}</p>
                </div>}
            </div>

        );
    } else {
        return (<div className='loading'>
            <p>
                Loading Model From Server...
            </p>
            <p>
                Please Be Patient
            </p>
            <div class="loader">Loading...</div>
        </div>)
    }
}

export default App;
