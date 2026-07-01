import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { AudioSpinner } from "./customspinner"
import CustomNavbar from "./customnavbar"
import { useFecth } from "../customhooks/usefetch"

function Recipe(){
    
    const data=useParams()
     
    const product=useFecth(`https://dummyjson.com/recipes/${data.recipe_id}`)
   
    
    
    return(<>
    <CustomNavbar/>
    {product?<img  src={product.image}/>:<AudioSpinner/>}
    </>)
}
export default Recipe