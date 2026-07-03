
//it will return jsx 
//component must starts with capital Letter
//we need to export component to access in other files
//we can write js code inside jsx using {}
import { useEffect, useState } from "react"
import { AudioSpinner} from "./customspinner";
import { NavLink } from "react-router";
import { useFecth } from "../customhooks/usefetch";
import FoodCard from "./customcard";

//component must have only single parent
function Products(){

  const {recipes}=useFecth('https://fast-api-testing.fastapicloud.dev/recipes')
 
  
   return(

   <div className="">
     {recipes?
     <div style={{display:'flex',flexWrap:'wrap'}}>{recipes.map((e,index)=> <FoodCard item={e}/>)}</div>
     :<AudioSpinner/>}
   </div>
  
  )
}
export default Products