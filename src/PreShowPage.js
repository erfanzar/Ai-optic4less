import { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import './App.css';


export const Page = (props) => {
    props.setStep(1);
    return null
}


export const Page0 = (props) => {

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{
                fontSize: '20px'
            }}>
                HI
            </p>

            <p style={{
                fontSize: '20px'
            }}>
                WELCOME TO THE ONLINE
            </p>
            <p style={{
                fontSize: '20px'
            }}>
                SMART EYE TEST OF THE OPTIC4LESS
            </p>
            <div style={{
                height: '60px'
            }}></div>
            <div onClick={() => {
                props.setStep(props.step + 1)
            }} style={{
                alignSelf: 'center',
                alignItems: 'center',
                height: '80px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                cursor: 'pointer'
            }}>
                <p style={{
                    alignItems: 'center',
                    color: 'white'
                }}>
                    NEXT !
                </p>
            </div>
        </div>
    )
}


export const Page1 = (props) => {

    useEffect(() => {
        var audio = new Audio('/assets/voice/male_or_female_uk_female.mp3');
        audio.play();
    }, [])

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>

            <p style={{
                fontSize: '20px'
            }}>
                ANSWER THE QUESTION
            </p>
            <div style={{
                height: '60px'
            }}></div>
            <div style={{
                alignSelf: 'center',
                alignItems: 'center',
                height: '100px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                // backgroundColor: 'black'
            }}>
                <div onClick={() => {
                    props.setStep(props.step + 1)
                }} style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    height: '80px',
                    width: '200px',
                    margin: '20px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    cursor: 'pointer'
                }}>
                    <p style={{
                        alignItems: 'center',
                        color: 'white'
                    }}>
                        MALE
                    </p>
                </div>

                <div onClick={() => {
                    props.setStep(props.step + 1)
                }} style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    margin: '20px 10px',
                    height: '80px',
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    cursor: 'pointer'
                }}>
                    <p style={{
                        alignItems: 'center',
                        color: 'white'
                    }}>
                        FEMALE
                    </p>
                </div>
            </div>


        </div>
    )
}


export const Page2 = (props) => {

    useEffect(() => {
        var audio = new Audio('/assets/voice/select_your_age_uk_female.mp3');
        audio.play();
    }, [])

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{
                fontSize: '20px'
            }}>
                SELECT YOUR AGE
            </p>
            <div style={{
                height: '60px'
            }}></div>
            <div className="slidecontainer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="slider-keeper">
                    <input type="range" min="1" max="100" value={props.age} className="slider" id="myRange"
                        onChange={(e) => {
                            props.setAge(e.target.value)
                        }} />
                    <div className="slider-num">
                        {new Array(100).fill('').map((item, index) =>
                            <div className={`slider-num-item ${index == 99 && 'slider-num-item-end'} ${index == 0 && 'slider-num-item-start'} `}>
                                <span className={`slider-num-item-line ${[0, 25, 50, 75].indexOf(index) != -1 && 'slider-num-item-line-active'}`} />
                                {[0, 25, 50, 75].indexOf(index) != -1 &&
                                    <span className='slider-num-item-text'>{index}</span>
                                }
                                {index == 99 &&
                                    <span className='slider-num-item-text' >100</span>
                                }

                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div style={{
                height: '60px'
            }}></div>
            <p style={{
                alignItems: 'center',
                color: 'black'
            }}>
                AGE : {props.age}
            </p>
            <div style={{
                height: '30px'
            }}></div>
            <div onClick={() => {
                props.setStep(props.step + 1)
            }} style={{
                alignSelf: 'center',
                alignItems: 'center',
                height: '80px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                cursor: 'pointer'
            }}>
                <p style={{
                    alignItems: 'center',
                    color: 'white'
                }}>
                    NEXT !
                </p>
            </div>
        </div>
    )
}


export const Page3 = (props) => {

    useEffect(() => {
        var audio = new Audio('/assets/voice/model_loaded_uk_female.mp3');
        audio.play();
    }, [])


    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{
                fontSize: '20px'
            }}>
                MODEL LOADED AND WE CALCULATED
            </p>

            <p style={{
                fontSize: '20px'
            }}>
                THINGS THAT WE WANTED NOW YOU HAVE TO GET AWAY
            </p>
            <p style={{
                fontSize: '20px'
            }}>
                FROM THE CAMERA AND DISPLAY FOR 1.5 M
            </p>
            <p style={{
                fontSize: '20px'
            }}>
                (DON'T WORRY OUR AI WILL CALCULATE YOU DISTANCE)
            </p>
            <div style={{
                height: '60px'
            }}></div>
            <div onClick={() => {
                props.setStep(props.step + 1)
            }} style={{
                alignSelf: 'center',
                alignItems: 'center',
                height: '80px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                cursor: 'pointer'
            }}>
                <p style={{
                    alignItems: 'center',
                    color: 'white'
                }}>
                    NEXT !
                </p>
            </div>
        </div>
    )
}



export const Page4 = (props) => {

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{
                fontSize: '20px'
            }}>
                sabghe zaEf cheshm
            </p>
            <div style={{
                height: '60px'
            }}></div>
            <div className="slidecontainer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="slider-zaf-keeper">
                    <input type="range" min="0" max="10" value={props.age} className="slider-zaf" step={0.25}
                        onChange={(e) => {
                            props.setWeakness(e.target.value)
                        }} />
                    <div className="slider-zaf-num">
                        {[0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10].map((item, index) =>
                            <div className={`slider-zaf-num-item ${item == 10 && 'slider-zaf-num-item-end'} ${item == 0 && 'slider-zaf-num-item-start'} `}>
                                <span className={`slider-zaf-num-item-line ${[0, 5, 10].indexOf(item) != -1 && 'slider-zaf-num-item-line-active'}`} />
                                {[0, 5, 10].indexOf(item) != -1 ?
                                    <span className='slider-zaf-num-item-text'>{item}</span>
                                    :
                                    <span className='slider-zaf-num-item-text-small'>{item}</span>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div style={{
                height: '60px'
            }}></div>
            <p style={{
                alignItems: 'center',
                color: 'black'
            }}>
                {props.weakness}
            </p>
            <div style={{
                height: '30px'
            }}></div>
            <div onClick={() => {
                props.setStep(props.step + 1)
            }} style={{
                alignSelf: 'center',
                alignItems: 'center',
                height: '80px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                cursor: 'pointer'
            }}>
                <p style={{
                    alignItems: 'center',
                    color: 'white'
                }}>
                    NEXT !
                </p>
            </div>
        </div>
    )
}

