import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import API from './API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <API />
  </StrictMode>,
)
