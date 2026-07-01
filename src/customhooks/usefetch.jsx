import { useEffect, useState } from "react";


export function useFecth(url){
  const [data,setdata]=useState([])
   useEffect(()=>{
     fetch(url)
 .then(res => res.json())
 .then(response=>{

   setdata(response)});
   },[])

   return data
}