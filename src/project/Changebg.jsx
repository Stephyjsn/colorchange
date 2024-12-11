import React, { useState} from 'react'
import './Changebg.css'

function Changebg() {
  const [color, setColor] = useState("#BAFA01")
  return (
    <>
      <h2 style={{color:color}}>BackgroundColor Change</h2>
      <div style={{width:"325px",height:"350px", border:`1px solid ${color}`, borderRadius:"10px" ,backgroundColor:color}}></div>
      <button className='btn btn1' onClick={()=>setColor("red")}>Red</button>
      <button className='btn btn2' onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='btn btn3' onClick={()=>setColor("blue")}>Blue</button>
      <button className='btn btn4' onClick={()=>setColor("black")}>Black</button>
      <button className='btn btn5' onClick={()=>setColor("green")}>Green</button>



    </>
  )
}

export default Changebg