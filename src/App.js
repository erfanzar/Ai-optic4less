/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React , {useRef,useEffect, useState} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as model_face from '@tensorflow-models/blazeface'
// import * as tfn from '@tensorflow/tfjs-node'

function App() {

  const webcamRef = useRef(null);  

  const [loading,set_loading] = useState(true);
  // const [loading,set_loading] = useState(false);
  const [test_end,set_test_end] = useState(false)


  const [show,set_show] = useState(null)
  const [TRue,set_TRue] = useState(null)
  const [FAlse,set_FAlse] = useState(null)
  const [distance,set_Distance] = useState(null)
  const [px,set_px] = useState(null) ;

  
  const Allowed_size = 430
  const trp = 5;
  const wid = 640;
  const hig = 640;
  const trash_hold = 0.6;
  const fully_width = window.innerWidth
  const URL = 'https://ai.almubdieuntech.com/tfjs/model.json'
  // const names = ['bottom','face','left','right','top']

  let end = false;
  let v = null;
  let output;
  let None_Change = 0;
  let route = 0;
  let total;
  let gg = null;
  let time = 0;
  let allowed_false = 3;
  let perma_false = 2

  const Detection = async (Model,Model_Face) => {
    if (
      typeof webcamRef.current !== "undefined"&&
      webcamRef.current !== null &&
      typeof webcamRef.current.video !== "undefined" &&
      gg !== null &&
      end !== true
    )
    {
      const video = webcamRef.current.video
      const VideoWeight = webcamRef.current.video.videoWeight;
      const VideoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.height = VideoWeight ;
      webcamRef.current.video.width  = VideoHeight;
      const x =tf.image.resizeBilinear(tf.browser.fromPixels(video), [640, 640])
      .div(255.0).expandDims(0).reshape([1,640,640,3]);
      const pred =await  Model.executeAsync(x)
      const [boxes, scores, classes, valid] = pred
      const boxes_data = boxes.dataSync();
      const scores_data = scores.dataSync();
      const classes_data = classes.dataSync();
      const valid_data = valid.dataSync()[0];

      const predict_face = await Model_Face.estimateFaces(video,false)
      if (predict_face.length > 0) {
        for (let i = 0; i < predict_face.length; i++) {
          const start = predict_face[i].topLeft;
          const end = predict_face[i].bottomRight;
          let width_f = end[0] - start[0]

          let dis = wid/width_f
          // console.log(`Height :${height} , width : ${width}`);
          if (fully_width > Allowed_size){
            if (v===null){
              console.log('Windows or mac System');
              console.log(`loaded width : ${fully_width}`);
              v=true
            }
            if (dis*10 <15)
            {
              set_Distance("Nan");
            }
            else
            {
              set_Distance(Math.floor(((dis*10)*2.6)*1.5));
            } 
            if (0<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<90){
              set_px(100-(time*trp))
            }
            else if (90<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<160){
              set_px(150-(time*trp))
            }
            else if (160<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<250){
              set_px(190-(time*trp))
            }
          }
          if (fully_width < Allowed_size){
            if (v===null){
              console.log('Mobile System');
              console.log(`loaded width : ${fully_width}`);
              v=true
            }
            if (dis*10 <15)
            {
              set_Distance("Nan");
            }
            else
            {
              set_Distance(Math.floor(((dis*10)*1.5)));
            } 
            if (0<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<90){
              set_px(100-(time*trp))
            }
            else if (90<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<160){
              set_px(150-(time*trp))
            }
            else if (160<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<250){
              set_px(190-(time*trp))
            }
          }
        }
      }
        
      var i;
      for (i=0 ; i<valid_data;i++){
        // let [x1,y1,x2,y2] = boxes_data.slice(i*4,(i+1)*4)
        if (scores_data[i].toFixed(2) > trash_hold){
          output = classes_data[i]
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
  }
  
  // const DetectionTest = async (Model_Face) => {
  //   if (
  //     typeof webcamRef.current !== "undefined"&&
  //     webcamRef.current !== null &&
  //     typeof webcamRef.current.video !== "undefined" &&
  //     end !== true
      
  //   )
  //   {
  //     const video = webcamRef.current.video
  //     const VideoWeight = webcamRef.current.video.videoWeight;
  //     const VideoHeight = webcamRef.current.video.videoHeight;
  //     webcamRef.current.video.height = VideoWeight ;
  //     webcamRef.current.video.width  = VideoHeight;
  //     // console.log('run');
  //     const predict_face = await Model_Face.estimateFaces(video,false)
  //     if (predict_face.length > 0) {
  //       for (let i = 0; i < predict_face.length; i++) {
  //         const start = predict_face[i].topLeft;
  //         const end = predict_face[i].bottomRight;
  //         let width_f = end[0] - start[0]

  //         let dis = wid/width_f
  //         // console.log(`Height :${height} , width : ${width}`);
  //         if (fully_width > Allowed_size){
  //           if (v===null){
  //             console.log('Windows or mac System');
  //             console.log(`loaded width : ${fully_width}`);
  //             v=true
  //           }
  //           if (dis*10 <15)
  //           {
  //             set_Distance("Nan");
  //           }
  //           else
  //           {
  //             set_Distance(Math.floor(((dis*10)*2.6)*1.5));
  //           } 
  //           if (0<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<90){
  //             set_px(100-(time*trp))
  //           }
  //           else if (90<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<160){
  //             set_px(150-(time*trp))
  //           }
  //           else if (160<Math.floor(((dis*10)*2.6)*1.5) && Math.floor(((dis*10)*2.6)*1.5)<250){
  //             set_px(190-(time*trp))
  //           }
  //         }
  //         if (fully_width < Allowed_size){
  //           if (v===null){
  //             console.log('Mobile System');
  //             console.log(`loaded width : ${fully_width}`);
  //             v=true
  //           }
  //           if (dis*10 <15)
  //           {
  //             set_Distance("Nan");
  //           }
  //           else
  //           {
  //             set_Distance(Math.floor(((dis*10)*1.5)));
  //           } 
  //           if (0<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<90){
  //             set_px(100-(time*trp))
  //           }
  //           else if (90<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<160){
  //             set_px(150-(time*trp))
  //           }
  //           else if (160<Math.floor(((dis*10)*2.6)) && Math.floor(((dis*10)*2.6))<250){
  //             set_px(190-(time*trp))
  //           }
  //         }
  //       }
  //     }
  //   }
  // }


  const LoadModel = async (side) => {
    if (route === 0){
      
      route = 1
      const Model_Face = await model_face.load()
      console.log('Face Model Loaded')
      const Model = await tf.loadGraphModel(URL);
      console.log("Model Loaded");
      set_loading(false)
      gg = true
      setInterval(() => {
          Detection(Model,Model_Face)     
          // DetectionTest(Model_Face)      
        }, 100);
    }
  }

  const exam = (side) => {
    
      let True  = 0;
      let False = 0;
      
      let start = Date.now();
      setInterval(()=>
      {
        if(gg !== null && v !== null && end !== true)
        {
          if (side === output)
          {
            True += 1
            side = Math.floor(Math.random()*4)
            time +=1
            if (False > perma_false){
              allowed_false +=1 
              perma_false -= 1
            }
            set_show(side)
          }else
          {
            let  current = Date.now()
            setInterval(()=>
            {
              current = Date.now()
            },1)
            if(current-start >= 5000)
            {
              start = Date.now();
              False += 1
              time +=1
              current = Date.now()
              side = Math.floor(Math.random()*4) 
              set_show(side)
            }
          }
        total = [True,False-1]
        set_FAlse(False)
        set_TRue(True)
        if (False >= allowed_false) {
          set_test_end(true)
          end = true
        }
        if(1>2){
        console.log(total)
        }
      } 
    },100)
  }
  

  useEffect( () => {
    if (route === 0) {
      let side = Math.floor(Math.random()*4)
      set_show(side)
      LoadModel(side)
      exam(side)
    }
  },[None_Change])


  if (loading === false){
    return (
      <div>
      { test_end !== true &&
        <div className='Page'>
        
          <div className='result'>
            <p className='result1'>True : {TRue}</p>
            <p className='result2'>False : {FAlse}</p>
            <p className='result3'>Distance : {distance} Cm </p>
          </div>
          <div className='ImageCorner'>
          
          {
            show === 0 && test_end !== true?
            <div>
              <img className='Side'
                src='/assets/images/BottomSide.jpg'
                style={{
                  height:`${px}px`,
                  width:`${px}px`,
                }}
              ></img>
            </div>:<div/>
          }
          {
            show === 1 && test_end !== true?
            <div>
              <img className='Side'
                src='/assets/images/LeftSide.jpg'
                style={{
                  height:`${px}px`,
                  width:`${px}px`,
                }}
              ></img>
            </div>:<div/>
          }
          {
            show === 2 && test_end !== true?
            <div>
              <img className='Side'
                src='/assets/images/RightSide.jpg'
                style={{
                  height:`${px}px`,
                  width:`${px}px`,
                }}
              ></img>
            </div>:<div/>
          }
          {
            show === 3 && test_end !== true?
            <div>
              <img className='Side'
                src='/assets/images/Topside.jpg'
                style={{
                  height:`${px}px`,
                  width:`${px}px`,
                }}
              ></img>
            </div>:<div/>
          }
          </div>
          <Webcam
            ref={webcamRef}
            height={hig}
            width={wid}
            mirrored={true}
            className='camera'
            style={{
              height:`${300}px`,
              width:`${200}px`,
            }}
          />
        
        </div>
        }
      {
        test_end ===true &&
        <div className='test_end'>
          <p className='end_result'>Test Ended</p>
          <p className='end_result'>True : {TRue}</p>
          <p className='end_result'>False : {FAlse}</p>
        </div>
      }
      </div>
      
    );
  }else{
    return(
    <div className='loading'>
    <p>
      Loading Model From Server...
    </p>
    <p>
      Please Be Patient   
    </p>
    <div class="loader">Loading...</div>
  </div>
    )
  }
}

export default App;
