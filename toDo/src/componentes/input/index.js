import React from 'react'

import "./input.css";

export default function Input(props) 
{
  return (
    <div>
      <input value={props.value} onChange={props.getValue} className={props.className} placeholder={props.placeholder}/>
    </div>
  )
}
