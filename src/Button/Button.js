import React from "react";
import "./Button.css";

const Button=({onButtonClick,message,url})=>{
  const onPageChange=()=>{
    if(onButtonClick){
      onButtonClick(url)
    }else{
      return
    }
  }

  return(
    
   <div className="wrap">
      <button onClick={onPageChange}>
        {message}
      </button>

    </div>
  )
}

export default Button;