import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function VoiceButton() {
  const [isshow,setshow]=useState(false)
  const handleChange=()=>{
    setshow((prev)=>!prev)
  }
  return(
    <>
     {isshow?<>
     <button className="btn btn-warning" style={{position:"fixed",
        top:'18%',
        zIndex:'1',
        right:'2%',
        borderRadius:'50%',
        padding:'0px 10px'}} onClick={handleChange}>X</button>
     <iframe
      allow="microphone; camera; display-capture"
      src="https://assistant-490-2laqhx.sandbox.livekit.io/"
      style={{
        width: "20%",
        height: "80%",
        border: "none",
        position:"fixed",
        bottom:'2%',
        right:'2%',
        borderRadius:'10px'

      }}
      title="AI Assistant"
    />
     </>:<button style={{
        position:"fixed",
        bottom:'2%',
        right:'2%',
        borderRadius:'10px',
        padding:'10px'
    }} onClick={handleChange}>🤖</button>}
    </>
  )
}