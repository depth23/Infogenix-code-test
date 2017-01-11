"use strict";

var screenSize = window.screen.width;

if(screenSize <= 415) {
  document.getElementById("burger-menu").addEventListener("click", function() {
    document.getElementById('html').className += "no-scroll";
    document.getElementById('body').className += "no-scroll";
    document.getElementById('header').style.height = "100vh";
    document.getElementById('navBar').style.display = "block";
    document.getElementById('liOne').style.lineHeight = "20vh";
    document.getElementById('liTwo').style.lineHeight = "20vh";
    document.getElementById('liThree').style.lineHeight = "20vh";
  }, false);
  
  document.getElementById("navBar").addEventListener("click", function() {
    document.getElementById('html').className = " ";
    document.getElementById('body').className = " ";
    document.getElementById('header').style.height = "160px";
    document.getElementById('navBar').style.display = "none";
  }, false);
}