import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import '@/index.css'

import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Use Vite's base as the router basename so routes work under /effectivesoft/ on GitHub Pages */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
