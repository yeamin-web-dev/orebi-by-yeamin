import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './components/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
<ContextApi>

  <App />
</ContextApi>
)
