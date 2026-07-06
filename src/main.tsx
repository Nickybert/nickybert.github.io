import CursorNetwork from "@/components/CursorNetwork";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* The interactive network background */}
    <CursorNetwork />
    
    {/* Your main website content */}
    <App />
  </StrictMode>,
)
