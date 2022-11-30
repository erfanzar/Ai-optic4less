import {useEffect, useState} from "react";
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
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
                backgroundColor: 'black'
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
                    backgroundColor: 'black'
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
                    backgroundColor: 'black'
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
                <input type="range" min="1" max="100" value={props.age} className="slider" id="myRange"
                       onChange={(e) => {
                           props.setAge(e.target.value)
                       }}></input>
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
                backgroundColor: 'black'
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
                backgroundColor: 'black'
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
