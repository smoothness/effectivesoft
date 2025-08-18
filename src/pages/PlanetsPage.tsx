import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import PlanetsList from '@/components/PlanetsList'

function PlanetsPage() {
  return (
    <div>
      <section className="mb-6">
        <h2>Planets 🪐</h2>
      </section>
      <section>
        <h3 className="!mb-4">Select a planet from the list</h3>
        <ErrorBoundary fallback={<p>Something went wrong fetching planets 💩</p>}>
          <Suspense fallback={<p>Loading planets...</p>}>
            <PlanetsList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  )
}

export default PlanetsPage
