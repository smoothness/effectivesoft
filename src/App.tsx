import { Routes, Route } from 'react-router'

import '@/App.css'

import Layout from '@/components/Layout'

import HomePage from '@/pages/HomePage'
import PlanetsPage from '@/pages/PlanetsPage'
import PlanetDetailPage from '@/pages/PlanetDetailPage'
import NoMatch from '@/pages/NoMatch'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="planets/:slug" element={<PlanetDetailPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
