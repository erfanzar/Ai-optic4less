import Detection from './Detection'
import check from './Check'
import * as tf from '@tensorflow/tfjs'

const LoadModel = async (route, side,URL, is_true, set_show,webcamRef,trash_hold) => {
    if (route === 0){
      let output = 'empty'
      route = 1
      const Model = await tf.loadGraphModel(URL);
      console.log("Model Loaded");
      
      setInterval(() => {
            output = Detection(Model,output,webcamRef,trash_hold)
            
            check(output, side, is_true, set_show)
            return output
        }, 100);
    }
}

export default LoadModel;