import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// FIX: Use a direct relative path instead of the @/ alias
import CursorNetwork from './components/CursorNetwork.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorNetwork />
    <App />
  </StrictMode>,
)
