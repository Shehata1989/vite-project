import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto h-screen flex flex-col items-center text-white bg-[#1C1C1D]'>
    <App />
    </div>
  </StrictMode>,
)
