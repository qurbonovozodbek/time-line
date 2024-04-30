import React, { useState } from 'react'
import img from '../assets/phone.png'

function Uzbek() {
    const [text, setText] = useState('')


    function handleChange(e) {
        setText(e.target.value)
    }

  return (
    <div className='area'>
        <textarea onChange={(e) => handleChange(e)} name="text" id="text" cols="92.8" rows="10" placeholder='Habar matni...'></textarea>
        <img src={img}  />
            <div className="card"> {
                text.length === 0 ? <span>Habar matni yo'q</span> : text
            } </div>
    </div>
  )
}

export default Uzbek