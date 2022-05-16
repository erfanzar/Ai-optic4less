/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React , {useRef,useEffect, useState} from 'react';
import './App.css';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs'


function App() {
  
  

  const [output,set_output] = useState(null)
  const [show,set_show] = useState(null)


  let check_out = output;
  let None_Change = 0;
  let side ;
  let wrong_side = 5000;
  let is_true = false
  let route = 0;


  const wid = 640;
  const hig = 640;
  const trash_hold = 0.7;
  const webcamRef = useRef(null);
  const URL = 'https://model.almubdieuntech.com/tfjs/model.json'

  // const names = ['bottom','left','right','top']


  useEffect( () => {
    if (route === 0) {
        
        LoadModel()
        side = Math.floor(Math.random()*4)
        set_show(side)
        let total = exam(side,check_out)
        setInterval(()=>{
          console.log(total)
        }
          ,1000)
    }
  },[None_Change])




  const LoadModel = async () => {
    if (route === 0){
      
      route = 1
      const Model = await tf.loadGraphModel(URL);
      console.log("Model Loaded");
      
      setInterval(() => {
        Detection(Model,check_out)
        check(check_out)
        
      }, 100);
    }
  }





  const Detection = async (Model) => {
    if (
      typeof webcamRef.current !== "undefined"&&
      webcamRef.current !== null
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
          set_output(classes_data[i]);
    
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



  const exam = (side_element,output_element) => {
    let True  = 0;
    let False = 0;
    if (side_element === output_element){
      True += 1
    }else{
      setTimeout(()=>{False +=1},wrong_side)
    }

    const total = [True,False]
    return total
  }


  

  const check = ()=>{
    
    if (
      check_out === side
    ){
      is_true = true
      console.log('worked');
      side = (Math.floor((Math.random()*4)))
      set_show(side)
    }else{
      is_true = false
    }
  }




  setInterval(()=>{
    console.log(check_out)
  },1000)



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
            height:`${hig}px`,
            width:`${wid}px`,
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
