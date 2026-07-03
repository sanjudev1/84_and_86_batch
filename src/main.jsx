import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import Services from './service.jsx';
import Recipe from './components/recipe.jsx';
import { createContext } from 'react';
import { kukkatpallystore } from './stores/kukkatpally.jsx';
export const Waiter = createContext();
export const Waiter_2 = createContext();
import { Provider } from 'react-redux'
import Cart from './components/cart.jsx';
createRoot(document.getElementById('root')).render(

  <>
 <BrowserRouter>
  
     <Provider store={kukkatpallystore}>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/recipe/:recipe_id" element={<Recipe/>} />
      <Route path="/cart" element={<Cart/>} />

    </Routes>
     </Provider>

   
  </BrowserRouter>,
  </>
 
)
