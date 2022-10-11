import React, { Component } from "react";
import ImageHolder from "./ImageHolder";
import ImageSlider from "./imageSlider";
import { SliderData } from "./SliderData";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";


function Home() {
  return (
    <div className="slides">
      <ImageSlider slides={SliderData} />
      <ImageHolder /> 
      
    </div>
  );
}
//}

export default Home;
