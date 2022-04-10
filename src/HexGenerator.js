import React from "react";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


  let hexColor ='#';

  function HexGenerator() {
    
    function getRandomNumber(){
      return Math.floor(Math.random() * hex.length);
    }

    for (let i = 0; i < 6; i++) {
  
      hexColor += hex[getRandomNumber()];
    
    }

    return document.body.style.backgroundColor = hexColor;
    

  }
export default HexGenerator