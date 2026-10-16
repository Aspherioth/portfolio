import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/instrument-serif'
import '@fontsource/instrument-serif/latin-italic'
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/jetbrains-mono/wght.css'

import App from '@/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
