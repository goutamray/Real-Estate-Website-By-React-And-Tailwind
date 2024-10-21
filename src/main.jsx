
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'; 

import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react';




createRoot(document.getElementById('root')).render(
     <StrictMode>
           <App />
     </StrictMode>
       
 
)


