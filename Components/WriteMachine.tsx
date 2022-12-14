import React,{useEffect, useState} from 'react'

export default function WriteMachine(props:any) {

    const[text,setText] = useState("")

    const writeMachine = (text:any, i = 0)=>{
        if(i < text.length){
            setText(text.slice(0, i + 1))
            setTimeout(()=> writeMachine(text, i + 1),30)
        }
    }

    useEffect(()=>{
        setTimeout(()=>writeMachine(props.text))
    },[])

  return (
    <div>
        {text}
    </div>
  )
}
