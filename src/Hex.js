import { useState, useEffect } from "react";
import React from 'react';



function Hex({ HexGenerator }) {

  // Intialize the first hex number
  
  const [hexNum, setHexNum] = useState('#f15025')

  // useEffect(()=>{document.body.style.backgroundColor = setHexNum(HexGenerator)},[])
  
  
  return (

    <div className='app' style={{background:hexNum}}>

      {/* The NavBar */}
      <nav>
        <div className='nav-center'>
          <h4>Colors Generator</h4>
          <ul className='nav-links'>
            <li>
              <a href=''>simple</a>
            </li>
            <li>
              <a href=''>hex</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* THE BODY */}
      <main>
        <div className='container'>
            <h2>
              background color : 
              <span className='color'>{ hexNum }</span>
            </h2>
            <button className='btn btn-hero' onClick={ ()=>{ document.body.style.backgroundColor = setHexNum(HexGenerator)} }>Click Me </button>
            {/* <button className='btn btn-hero' onClick={ ()=>{setHexNum(HexGenerator)} }>Click Me </button> */}
        </div>
      </main>
    </div>
    
  );
}

export default Hex;