import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
// import * as cv from '@techstark/opencv-js'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import {fl, df} from './utils'
import {Page0, Page1, Page2, Page3} from "./PreShowPage";
// import * as tfn from "@tensorflow/tfjs-node";
import * as model_face from '@tensorflow-models/blazeface'

let v = null;
const images = ['BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg'
]


const ImageShow = (onShow, index, px) => {
    if (onShow === true) {

        return (<div
            style={{
                border: '5px solid black',
                height: `${px + 10}px`,
                width: `${px + 10}px`,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                color: 'black',
                borderRadius: '0px',
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
    if (v === true) {
        if (total <= 0) {
            return (<div style={{
                display: 'flex',

            }}>
                {ImageShow(total === 0, 0, px)}
                <div style={{
                    display: 'flex'
                }}>
                    <p style={{
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
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
                        color: 'black',
                        margin: '20px',
                        fontSize: `${font}px`
                    }}>
                        20/10
                    </p>
                </div>
            </div>)
        }
    }
}

const Intrep = (x, xf, yf) => {
    const xv = xf[1] - xf[0]
    const xy = x - xf[0]
    const yv = yf[1] - yf[0]
    const xx = xy / xv
    return (xx * yv) + yf[0]

}


const known_distance = 53.5
const known_width = 26
const ref_image_face_width = 290


function App() {


    const webcamRef = useRef(null);

    const [loading, set_loading] = useState(true);
    const [test_end, set_test_end] = useState(false)
    const [ts, setTs] = useState([0, 0, 0])
    const [show, set_show] = useState(null)
    const [TRue, set_TRue] = useState(0)
    const [FAlse, set_FAlse] = useState(0)
    const [distance, set_Distance] = useState(null)
    const [va, setVa] = useState(null)
    const [px, set_px] = useState(null)
    const [Step, setStep] = useState(0)
    const [age, setAge] = useState(20)


    const trp = 6;
    const wid = 640;
    const hig = 640;
    const time_test_run = 5000;
    const URL = 'https://ai.optics4less.com/Model/Old/model.json'
    let classes_name = ['bottom', 'left', 'right', 'top']

    let end = false;
    let output;
    let None_Change = 0;
    let route = 0;
    let total = [0, 0, 0];
    let totalTimes = 0;
    let gg = null;
    let start_dis = 170;
    let focal_distance;
    let ww = window.innerWidth;
    let [isLeft, setIsLeft] = useState(true);
    let time = 0;
    let allowed_false = 4;
    let p_false = 2
    focal_distance = fl(known_distance, known_width, ref_image_face_width);
    const Detection = async (Model_Face, Model) => {
        // const Detection = async (Model) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && typeof webcamRef.current.video !== "undefined" && gg !== null && end !== true) {
            const video = webcamRef.current.video
            const VideoWeight = webcamRef.current.video.videoWidth;
            webcamRef.current.video.height = webcamRef.current.video.videoHeight;
            webcamRef.current.video.width = VideoWeight;
            if (Model !== null) {
                // const x = tf.image.resizeBilinear(tf.browser.fromPixels(video), [640, 640])
                //     .div(255.0).expandDims(0).reshape([1, 3, 640, 640]);
                // const pred = Model.execute(x)

                const x = tf.image.resizeBilinear(tf.browser.fromPixels(video), [640, 640])
                    .div(255.0).expandDims(0).reshape([1, 640, 640, 3]);
                const pred = await Model.executeAsync(x)

                // console.log(pred)
                const [boxes, scores, classes, valid] = pred

                const boxes_data = boxes.dataSync();
                const scores_data = scores.dataSync();
                const classes_data = classes.dataSync();
                const valid_data = valid.dataSync()[0];
                let i;
                for (i = 0; i < valid_data; i++) {


                    if (scores_data[i].toFixed(2) > 0.4) {
                        output = await classes.dataSync()[0, i]

                        // console.log(classes_name[output])
                    }
                }

                tf.dispose(pred)
                tf.dispose(boxes_data)
                tf.dispose(scores_data)
                tf.dispose(classes_data)
                tf.dispose(output)
                tf.dispose(valid_data)
                tf.dispose(boxes)
                tf.dispose(scores)
                tf.dispose(classes)
                tf.dispose(x)
                tf.dispose(valid)
            }
            if (Model_Face != null) {
                const predict_face = await Model_Face.estimateFaces(video, false)
                if (predict_face.length > 0) {

                    const start = predict_face[0].topLeft;
                    const end = predict_face[0].bottomRight;
                    let width_f = end[0] - start[0]
                    // console.log(width_f)
                    if (width_f !== null) {

                        let dis = df(focal_distance, known_width, width_f)
                        if (dis > start_dis) {
                            v = true
                        }
                        set_Distance(Math.floor(dis))

                        set_px(190 - (time * trp))


                    }
                }

            } else {
                // console.log('start')
                v = true
                set_Distance(175)
            }

        }
    }


    const LoadModel = async () => {
        if (route === 0) {
            route = 1
            // const Model_Face = await model_face.load();

            console.log('Face Model Loaded')
            const Model = await tf.loadGraphModel(URL);
            console.log("Model Loaded");
            set_loading(false)
            gg = true
            // const Model = null
            const Model_Face = null
            setInterval(() => {
                Detection(Model_Face, Model)

            }, 100);
        }
    }


    const exam = (side) => {
        let True = 0;
        let False = 0;

        setInterval(() => {
            let start = Date.now();
            if (gg !== null && v !== null && end !== true) {
                if (side === output) {
                    True += 1
                    // console.log(side)
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
                        // console.log(side)
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
                    // console.log(total)
                }
                totalTimes = False + True
                // console.log(totalTimes)
                if (totalTimes===5){
                    setIsLeft(false)
                    classes_name = ['bottom', 'left', 'right', 'top']
                }
                if (totalTimes===10){
                    setIsLeft(true)
                    classes_name = ['bottom', 'right', 'left', 'top']
                }
                if (totalTimes===15){
                    setIsLeft(false)
                    classes_name = ['bottom', 'left', 'right', 'top']
                }
                if (totalTimes===20){
                    setIsLeft(true)
                    classes_name = ['bottom', 'right', 'left', 'top']
                }
                if (totalTimes===25){
                    setIsLeft(false)
                    classes_name = ['bottom', 'left', 'right', 'top']
                }
                if (totalTimes===30){
                    setIsLeft(true)
                    classes_name = ['bottom', 'right', 'left', 'top']
                }
            }
        }, 3000)
    }


    useEffect(() => {
        if (route === 0) {
            let side = 0
            set_show(side)
            LoadModel()
            exam(side)
        }
    }, [None_Change])


    return (<div>
            {Step === 0 && <Page0 step={Step} setStep={setStep}/>}
            {Step === 1 && <Page1 step={Step} setStep={setStep}/>}
            {Step === 2 && <Page2 step={Step} setStep={setStep} setAge={setAge} age={age}/>}
            {Step === 3 && <Page3 step={Step} setStep={setStep}/>}
            {/*{Step === 4 && <Page4 step={Step} setStep={setStep}/>}*/}
            {/*{Step === 5 && <Page5 step={Step} setStep={setStep}/>}*/}
            {/*{Step === 6 && <Page6 step={Step} setStep={setStep}/>}*/}
            {/*{Step === 7 && <Page7 step={Step} setStep={setStep}/>}*/}
            {/*{Step === 8 && <Page8 step={Step} setStep={setStep}/>}*/}
            {/*{Step === 9 && <Page9 step={Step} setStep={setStep}/>}*/}
            {(loading === true && Step > 3) && <div className='loading'>
                <p>
                    LOADING MODEL FROM SERVER...
                </p>
                <p>
                    PLEASE BE PATIENT
                </p>
                <div class="loader">Loading...</div>
            </div>}
            {(test_end !== true && Step > 3 && loading === false) && <div className='Page'>

                {v === true && <div className='result'>

                    <p className='result1'>TRUE : {TRue}</p>
                    {isLeft ? <p className='result3'>EYE : LEFT </p> : <p className='result3'>EYE : RIGHT </p>}
                    <p className='result2'>FALSE : {FAlse}</p>
                    {/*<p className='result3'>Distance : {distance} Cm </p>*/}
                </div>
                }
                {v !== true && <div style={{alignContent: 'center'}}>
                    <>
                        <div style={{background: "cyan"}} className={` main-container `}>
                            <div style={{
                                width: Intrep(distance, [0, 130], [ww, 10]),
                                background: Intrep(distance, [0, 130], [ww, 10]) < ww / 4 ? "#66ffb3" : 'white'
                            }}
                                 className={` dynamic-width-container`}>
                                {distance !== null ? <span>
            {distance} CM | {start_dis} CM Require to Start
                </span> : <span>
                FACE MODEL TRYING TO LOAD...
                </span>}
                            </div>
                        </div>
                    </>
                </div>}
                {v === true && <div className='ImageCorner'>
                    {TestShow(TRue, FAlse, Intrep(px, [80, 350], [100, start_dis]))}
                </div>}

                <Webcam
                    ref={webcamRef}
                    height={hig}
                    width={wid}
                    mirrored={true}
                    className='camera'
                    style={{
                        height: `${isMobile ? 0 : 200}px`, width: `${isMobile ? 0 : 300}px`,
                    }}
                />

            </div>}
            {test_end === true && <div style={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p className='end_result'>Test Ended</p>
                <p className='end_result'>TRUE : {TRue}</p>
                <p className='end_result'>FALSE : {FAlse}</p>
                <p className='end_result'>AGE : {age}</p>

            </div>}
        </div>

    )


}


export default App;
