
//``--template literals $--->string interpolation

// component is a re-usable block of code 
// it will return jsx 
// it must starts with Captical letter
// we can write js code inside jsx using curly braces {} 
// class should be replaced classname
// it accept only single parent 

import { useState } from "react"

// we need to export before accesing this component in another file
let d={display:'flex',justifyContent:'center',gap:'10px',marginTop:'10px'}
function Counter(){
    const[count,setcount]=useState(0)
    const ajay=()=>{
      setcount(count+1)
    }

    const deepa=()=>{
        setcount(count-1)
    }

   return(
   <div style={d}>
    <button className="btn btn-danger" onClick={deepa}>Decrement</button>
    <h1 style={{color:`${count>=0 ?count==0?'black':'green' :'red'}`}}>{count}</h1>
    <button className="btn btn-success" onClick={ajay}>Increment</button>
   </div>) 
}
export default Counter 

