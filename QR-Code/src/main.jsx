import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './qr.css'
import { QR } from './QR.jsx'
import { Test } from './Test.jsx'
import { Demo } from './Demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QR/> */}
    {/* <Test/> */}
    <Demo/>

  </StrictMode>,
)
