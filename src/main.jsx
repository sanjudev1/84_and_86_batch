import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import Services from './service.jsx';
import Recipe from '#components/recipe';
import { createContext } from 'react';
export const Waiter = createContext();
export const Waiter_2 = createContext();
createRoot(document.getElementById('root')).render(

  <>
 <BrowserRouter>
   <Waiter value="10 crores">
    <Waiter_2 value="chicken biryani">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/recipe/:recipe_id" element={<Recipe/>} />
    </Routes>

    </Waiter_2>
   </Waiter>
  </BrowserRouter>,
  </>
 
)
