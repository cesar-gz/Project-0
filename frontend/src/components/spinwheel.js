import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const Spinwheel = props => {

/*
  -changed function name of rotateFunction to Spinwheel the export default works
  -added return(); because the syntax calls for it
  -went into App.js filed and changed the name of the import rotatefunction to spinwheel
  -renamed spinwheel.css to spin.css and spinwheel.html to spinw.html because I think it might
    solve linking issues
  -added a <Route> ... </Route> in the app.js that connects spinwheel.js to app.js
  */

return(
  
  function Spinwheel(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
      element.classList.add('animate');
    }, 5000);
  }

);

};

export default Spinwheel;
