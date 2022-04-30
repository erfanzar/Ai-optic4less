import React , {useRef,useEffect} from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';

function App() {
  const webcamRef = useRef(null)
  const wid = 640
  const hig = 480

  const tfjsModelJsonURL = 'public/assets/models/tfjs/model.json' 

  const LoadModel = async () => {
    const Model = await tf.loadGraphModel(tfjsModelJsonURL)
    console.log(Model)
  }

  useEffect(()=>{
    LoadModel();
  },[])

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
          width:`${wid}px`
        }}
      />
      </header>
    </div>
  );
}

export default App;
