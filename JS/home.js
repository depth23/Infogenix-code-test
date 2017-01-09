"use strict";

var screenSize = window.screen.width;

if(screenSize <= 320) {
  document.getElementById("burger-menu").addEventListener("click", function() {
    document.getElementById('html').style.overflow = "hidden";
    document.getElementById('body').style.overflow = "hidden";
    document.getElementById('header').style.height = "100vh";
    document.getElementById('navBar').style.marginLeft = "0";
  }, false);
  
  document.getElementById("navBar").addEventListener("click", function() {
    document.getElementById('html').style.overflow = "auto";
    document.getElementById('body').style.overflow = "auto";
    document.getElementById('header').style.height = "83px";
    document.getElementById('navBar').style.marginLeft = "102%";
  }, false);
}