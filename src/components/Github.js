import React from "react";
import Button from "../Button/Button";
import "../Button/Button.css";


const Github=({buttonClickHandler})=>{
  return (
    <div className="wrapper">
    <div className="wrap">

      <Button onButtonClick={buttonClickHandler}
      url="https://github.com/Roreley/YoutubeSearch"
      message="=>Click here and check source code on GitHub <="/>
    
    <p>Developed in React by Roreley</p>
    </div>
    </div>
  )
}

export default Github;