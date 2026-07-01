import React from "react"
import Alluarjun from "./alluarjun"

function Alluaravind(props){
    console.log("alluaravind")
  
    return(<>
    <Alluarjun property={props.property}/>
    </>)
}
export default React.memo(Alluaravind)