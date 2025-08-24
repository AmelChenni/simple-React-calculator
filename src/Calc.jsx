import React, { useState } from 'react'
import './Calc.css'

export default function Calc() {
  let [inputValue,setInputValue] = useState(0);
  let [total, setTotal] = useState(0);
  


  function handleChange(e){
    setInputValue(Number(e.target.value));  
  }
  function add(){
    setTotal(total + inputValue)
  }

    function Subtract(){
    setTotal(total - inputValue)
  }

    function Multiply(){
    setTotal(total * inputValue)
  }

    function Divide(){
    setTotal(total / inputValue)
  }
      function ResetI(){
    setInputValue(0)
  }

    function ResetR(){
    setTotal(0)
  }
  return (
    <>
       <>
      <div className="container">
        <h1>Simplest Working Calculator</h1>
        <div className="box">
            <p className="total">{total}</p>
            <input type="number" 
            value={inputValue} 
            onChange={handleChange}
            onFocus={()=>{
              setInputValue('')
            }}
            />
        </div>
        <div className="box2">
            <button type='button' onClick={add}>Add</button>
            <button type='button' onClick={Subtract}>Subtract</button>
            <button type='button' onClick={Multiply}>Multiply</button>
            <button type='button' onClick={Divide}>Divide</button>
            <button type='button' onClick={ResetI}>Reset Input</button>
            <button type='button' onClick={ResetR}>Reset Result</button>

        </div>
      </div>
    </>
    </>
  )
}
