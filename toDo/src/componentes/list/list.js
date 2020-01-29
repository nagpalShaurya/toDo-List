import React from 'react'

export default function List(props) 
{
  return (
    <div>
      {
        props.array.map((todo)=>
        {
          return <li>{todo}</li>
        })
      }
    </div>
  )
}
