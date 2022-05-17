import * as tf from '@tensorflow/tfjs';

const Detection = async (Model,output_element,webcamRef,trash_hold) => {
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
          console.log('OutPut (Function): ',classes_data[i]);
          output_element = classes_data[i]
          return output_element
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

export default Detection;