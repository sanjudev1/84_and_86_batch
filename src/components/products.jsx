
//it will return jsx 
//component must starts with capital Letter
//we need to export component to access in other files
//we can write js code inside jsx using {}
import { useEffect, useState } from "react"
import { AudioSpinner} from "./customspinner";
import { NavLink } from "react-router";
import { useFecth } from "../customhooks/usefetch";

//component must have only single parent
function Products(){

  const {recipes}=useFecth('https://fast-api-testing.fastapicloud.dev/recipes')
 
  
   return(

   <div className="">
     {recipes?
     <>{recipes.map((e,index)=><NavLink to={`/recipe/${e.id}`}><img  key={index} style={{width:'240px',borderRadius:'5px',marginLeft:'1px'}} src={e.image}/></NavLink>)}</>
     :<AudioSpinner/>}
   </div>
  
  )
}
export default Products