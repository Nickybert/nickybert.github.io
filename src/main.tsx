import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import CursorNetwork from './components/CursorNetwork'

import KofiButton from './components/KofiButton' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorNetwork />
    <KofiButton /> {/* Put in to render my new floating button on the homepage */}
    <App />
  </StrictMode>,
)
