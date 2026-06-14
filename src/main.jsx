import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx' // Default import
import CustomNavbar from './components/customnavbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCorousel from './components/customcorosuels.jsx';
import Counter from './components/counterapp.jsx';
import Products from './components/products';
import VoiceButton from '#components/voicebutton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CustomNavbar/>
   <CustomCorousel/>
   <Counter/>
   <Products/>
   <VoiceButton/>
  </StrictMode>
)
