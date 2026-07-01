import { useRef, useState } from "react"


function Search(){
    const [password,setpassword]=useState('')
    const myref=useRef()
    
   
    const submitdetails=()=>{
       console.log(myref.current.value,'myref')
    }
    const handlePassword=(pass)=>{
        console.log(pass)

    setpassword(pass)
    }
    return(<div style={{textAlign:'right',margin:'0px 20px 0px 100px'}}>
   
     <input placeholder="search" ref={myref} />
     <button onClick={submitdetails}>🔍</button>

     <input placeholder="search"  type="password" value={password} onChange={(e)=>{handlePassword(e.target.value)}} />
     <p style={{color:password.length>8?"green":"red"}}>{password.length>8?"You password Strong...":"Your password weak"}</p>
    </div>)
}
export default Search