import React , {useRef,useEffect} from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';

function App() {

  const webcamRef = useRef(null);

  const canvasRef = useRef(null);
  
  const wid = 640;
  const hig = 480;

  const ObjectDetectionHeightInput = 416
  const ObjectDetectionWidthInput = 416


  // FROM SERVER
  
  const Model_Json_URL = 'https://model.almubdieuntech.com/tfjs/model.json' 
  
  // FROM LOCAL --
  
  // const Model_Json_URL = `https://localhost:3000/assets/models/tfjs/model.json`


  const Detection = async (Net) => {
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

      canvasRef.current.video.height = VideoWeight ;
      canvasRef.current.video.width  = VideoHeight ;

      const img = tf.browser.fromPixels(video)
      const resized  = tf.image.resizeBilinear(img , [ObjectDetectionWidthInput,ObjectDetectionHeightInput])
      const casted   = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj      = await Net.executeAsync(expanded)

      console.log(obj)

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  }
 
  //TEST START

  // const v = []

  // for(let i = 0 ; i<519168 ;i++){
  //   v.push(i)
  // }

  // const inp = tf.tensor4d(v,[1,3,416,416])
  // console.log((inp.print()))

  //TEST END


  const LoadModel = async () => {
    const Net = await tf.loadGraphModel(Model_Json_URL);
    setInterval(() => {
      Detection(Net)
    }, 20);
  }
  useEffect(() => {
    LoadModel()
  },)
  

  return (
    <div className="App">
      <header className="App-header">
      <Webcam
        ref={webcamRef}
        height={hig}
        width={wid}
        mirrored={true}
        style={{
          alignSelf:'center',
          height:`${hig}px`,
          width:`${wid}px`,
          flex:1,
          flexDirection:'column',

        }}
      />
      <canvas
        ref={canvasRef}
        height={hig}
        width={wid}
        style={{
          alignSelf:'center',
          height:`${hig}px`,
          width:`${wid}px`,
          flex:1,
          flexDirection:'column',
        }}
      />
      </header>
    </div>
  );
}

export default App;
