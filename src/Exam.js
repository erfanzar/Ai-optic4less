const exam = (side_element,output_element,total,wrong_side) => {
    let True  = 0;
    let False = 0;
    setInterval(()=>{
      if (side_element === output_element){
        True += 1
      }else{
        setTimeout(()=>{False +=1},wrong_side)
      }
      total = [True,False]
      return total;
    },10)
}

export default exam;
