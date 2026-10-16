import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/schibsted-grotesk'

import App from '@/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
