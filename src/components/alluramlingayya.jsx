import { useCallback, useMemo, useState } from "react"
import Alluaravind from "./alluaravind"

function Alluramlingayya(){
    const same_fn=useCallback(()=>{
        return function(){}
    },[]) // it create new reference for every re-rendering
    const [count,setcount]=useState(0)
    console.log("alluramlingayya shake",)
     const total_sum=useMemo(function(){
       return [1,2,3,4,5].reduce(function(prev,num){
        console.log('revision cheyalii sir....')
        return prev+num 
    },0)
     },[])
    console.log(total_sum)
    return(<>
    <div style={{textAlign:'center'}}><button onClick={()=>setcount(count+1)} className="btn btn-outline-success">mock ivvandi</button></div>
      <h1 style={{textAlign:'center'}}>parent:{count}</h1>
       <Alluaravind property={same_fn} />
    </>)
}
export default Alluramlingayya