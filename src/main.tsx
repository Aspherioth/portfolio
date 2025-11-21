import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router'

import './index.css'
import './theme.css'

import App from '@/App.js'
import Games from '@/pages/Games'
import Home from '@/pages/Home'
import ThemePreview from '@/pages/ThemePreview.js'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='portfolio' element={<App />}>
          <Route index element={<Home />} />
          <Route path='games' element={<Games />} />
          <Route path='theme' element={<ThemePreview />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
