import { useState } from 'react';
import './App.css';
import Simple from './Simple';
import Hex from './Hex';
import HexGenerator from './HexGenerator';
import { ReactDOM } from "react";



function App() {


  // const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


  // let hexColor ='#';

  // function HexGenerator() {


  //   function getRandomNumber(){
  //     return Math.floor(Math.random() * hex.length);
  //   }


  //   for (let i = 0; i < 6; i++) {

  
  //     hexColor += hex[getRandomNumber()];
  //     // hexColor += hex[getRandomNumber()];
  //   }

  //   return hexColor
    

  // }


  return (
    <div>
      {/* <Simple /> */}
      <Hex HexGenerator = {HexGenerator}/>
    </div>
  );
}

export default App;
