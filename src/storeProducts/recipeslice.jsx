import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes:[]
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state,{payload}) => {
       console.log('increment',payload)
    let is_present= state.recipes.find(e=>e.id==payload.id)
    
    if(is_present){
       state.recipes.map((item,index)=>{
        if(item.id==is_present.id){
            is_present.count+=1
            state.recipes.splice(index,1,is_present)
        }
       })
    }else{
       state.recipes.push({...payload,count:1}) 
    }

      
    },
    decrement: (state,{payload}) => {
      
     let is_present= state.recipes.find(e=>e.id==payload.id)
    
    if(is_present){
       state.recipes.map((item,index)=>{
        if(item.id==is_present.id){
            is_present.count-=1
            state.recipes.splice(index,1,is_present)
        }
       })}
    },
    
  },
})

export const { increment, decrement } = productSlice.actions

export default productSlice.reducer