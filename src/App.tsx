import { Routes, Route } from 'react-router'

import '@/App.css'

import Layout from '@/components/Layout'

import HomePage from '@/pages/HomePage'
import PlanetsPage from '@/pages/PlanetsPage'
import PlanetDetailPage from '@/pages/PlanetDetailPage'
import NoMatch from '@/pages/NoMatch'
import LoginPage from '@/pages/LoginPage'
import ProtectedRoute from '@/auth/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<HomePage />} />
        <Route
          path="planets"
          element={
            <ProtectedRoute>
              <PlanetsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="planets/:slug"
          element={
            <ProtectedRoute>
              <PlanetDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
