// Copyright (c) 2023 Julien Laamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: Mar 2023
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function solves for area
  document.getElementById('area-math').innerHTML = 'The area is ' + (6*12)+'cm<sup>2</sup>'
}
function doMathClicked1 () {
  // this function solves for perimeter
  document.getElementById('perimeter-math').innerHTML = 'The perimeter is ' + (6*2+12*2)+ 'cm'
}