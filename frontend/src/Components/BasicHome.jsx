import React, { useEffect } from "react";
import { useState } from "react";
const BasicHome = () => {
    const [text,setText]=useState('')
    const [charIndex,setCharIndex]=useState(0)
    const [showBox,setShowBox]=useState(false)
    const phrase = "Sure, here's an introduction to dam favorability criteria Dams, critical infrastructures designed to impound or control water flow, play a significant role in water resource management, providing various benefits such as flood control, irrigation, hydropower generation, and water supply. However, the construction and operation of dams also entail numerous environmental, social, and economic considerations. To assess the viability and desirability of constructing a dam, engineers, policymakers, and stakeholders evaluate a range of criteria known as dam favorability criteria. These criteria encompass diverse aspects, including environmental impact, socio-economic implications, technical feasibility, and legal/regulatory compliance."
    
    const phraseIndex=phrase.length
    useEffect(()=>{
      const interval=setInterval(()=>{
        if(charIndex<phraseIndex){
          setText(prev=>prev+phrase[charIndex])
          setCharIndex(prev=>prev+1) 
        } 
        else{
          setShowBox(true)
        }
      },20)
      return ()=>clearInterval(interval)
    },[charIndex])

  return (
    <div>
      <div className="m-10 flex justify-center items-center flex-col font-mono">
        <div className="py-4">
          <h1 className="font-bold text-6xl x text-cyan-900">
            Welcome to <span className="text-cyan-500">AqueaValor</span>
          </h1>
        </div>
        <div>
          <h3 className="text-3xl">
            Here you can perform favorability analysis of a location for dams
          </h3>
        </div>
      </div>
      <div className="font-mono text-xl">
        {text}
      </div>
      {showBox && <form>
        <div className="flex flex-col border-4 rounded-lg border-cyan-900 shadow-lg m-4">
          <div className="m-5 p-5 flex flex-row items-center justify-around mx-2 ">
          <label className="font-semibold text-2xl">
              Latitude
              <input placeholder="Latitude" className=" border-4 border-cyan-500 rounded-md pr-4" type="search"></input>
            </label>
            <label className="font-semibold text-2xl">
              Longitude
              <input placeholder="Longitude" className=" border-4 border-cyan-500 rounded-md" type="search"></input>
            </label>
          </div>
        <div className="flex felx-row justify-center items-center mb-4">
            <label>
              <button className="border-4 rounded-lg p-2 w-25 border-cyan-900 font-bold font-mono text-2xl" type="submit" value="">Submit</button>
            </label>

          </div>

        </div>
        </form>}
    </div>
  );
};

export default BasicHome;
