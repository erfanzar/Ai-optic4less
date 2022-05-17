const check = (output, side, is_true, set_show)=>{
    
    if (
      output === side
    ){
      is_true = true
      console.log('worked');
      side = (Math.floor((Math.random()*4)))
      set_show(side)
    }else{
      is_true = false
    }
}

export default check;