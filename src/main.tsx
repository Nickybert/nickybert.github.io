import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Background effect
import CursorNetwork from './components/CursorNetwork'
// Your new Ko-fi button
import KofiButton from './components/KofiButton' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorNetwork />
    <KofiButton /> {/* Renders the floating button */}
    <App />
  </StrictMode>,
)
