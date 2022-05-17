/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React , {useRef,useEffect, useState} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';


function App() {
  
  
  const [show,set_show] = useState(null)


  let output;
  let None_Change = 0;
  let route = 0;
  let total;

  const wid = 640;
  const hig = 640;
  const trash_hold = 0.6;
  const webcamRef = useRef(null);
  const URL = 'https://model.almubdieuntech.com/tfjs/model.json'

  const names = ['bottom','left','right','top']



  const Detection = async (Model) => {
    if (
      typeof webcamRef.current !== "undefined"&&
      webcamRef.current !== null &&
      typeof webcamRef.current.video !== "undefined"
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

      var i;
      for (i=0 ; i<valid_data;i++){
        // let [x1,y1,x2,y2] = boxes_data.slice(i*4,(i+1)*4)
        if (scores_data[i].toFixed(2) > trash_hold){
          
          output = classes_data[i]
          console.log('OutPut (Function): ', output);
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



  const LoadModel = async (side) => {
    if (route === 0){
      
      route = 1
      const Model = await tf.loadGraphModel(URL);
      console.log("Model Loaded");
      
      setInterval(() => {
          Detection(Model)      
        }, 100);
    }
  }

  const exam = (side) => {
    let True  = 0;
    let False = 0;
    
    let start = Date.now();
    setInterval(()=>{
      

      let target_True = 1
      if (side === output){
        True += 1
        target_True+=1
        side = Math.floor(Math.random()*4)
        set_show(side)
        
        console.log('true');
      }else{
        
        let  current = Date.now()
        // console.log('sec :' , current - start);
      
        setInterval(()=>{
          current = Date.now()
        },1)
        console.log(current - start);
        if(current-start >= 5000){
          if(target_True !== True){
              start = Date.now();
              False += 1
              current = Date.now()
              side = Math.floor(Math.random()*4)
              set_show(side)
              console.log('sec : ',current-start);
              console.log('ur target set to :' , names[side] );
            }
          }
        
            
    
        }
        
      
      
      total = [True,False]
      console.log(total)
    },1000)
  }




  useEffect( () => {
    if (route === 0) {

      // let total;
      let side = Math.floor(Math.random()*4)
      set_show(side)
      LoadModel(side)
      exam(side)
    }
  },[None_Change])




  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          height={hig}
          width={wid}
          mirrored={true}
          style={{
            position:'relative',
            alignSelf:'center',
            height:`${400}px`,
            width:`${400}px`,
            flex:1,
            flexDirection:'column',
          }}
        />
        {
          show === 0 ?
          <div>
            <img
              src='/assets/images/BottomSide.jpg'
              style={{
                position:'relative',
                height:'150px',
                width:'150px',

              }}
            ></img>
          </div>:<div/>
        }
        {
          show === 1 ?
          <div>
            <img
              src='/assets/images/LeftSide.jpg'
              style={{
                position:'relative',
                height:'150px',
                width:'150px',

              }}
            ></img>
          </div>:<div/>
        }
        {
          show === 2 ?
          <div>
            <img
              src='/assets/images/RightSide.jpg'
              style={{
                position:'relative',
                height:'150px',
                width:'150px',
              }}
            ></img>
          </div>:<div/>
        }
        {
          show === 3 ?
          <div>
            <img
              src='/assets/images/Topside.jpg'
              style={{
                position:'relative',
                height:'150px',
                width:'150px',
              }}
            ></img>
          </div>:<div/>
        }
      </header>
    </div>
  );
}

export default App;
