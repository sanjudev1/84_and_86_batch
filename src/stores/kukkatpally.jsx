import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../storeProducts/recipeslice'

export const kukkatpallystore = configureStore({
  reducer: {

    'chinnamagariruchulu':productSlice.reducer
  },
})