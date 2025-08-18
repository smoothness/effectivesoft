import { Suspense } from 'react'
import { useParams, Link } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'

import PlanetDetail from '@/components/PlanetDetail'

function PlanetDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) {
    return (
      <div>
        <section>
          <BackToPlanets />
          <h2>Planet Not Found 💩</h2>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="mb-10">
        <BackToPlanets />
      </section>

      <section>
        <ErrorBoundary
          fallback={
            <div>
              <p>Something went wrong fetching planets 💩</p>
              <BackToPlanets />
            </div>
          }
        >
          <Suspense fallback={<p>Loading planet details...</p>}>
            <PlanetDetail slug={slug} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  )
}

function BackToPlanets() {
  return (
    <Link to="/planets" className="inline-block !text-fuchsia-700 hover:text-fuchsia-900 text-sm transition-colors">
      ⬅️ Back to Planet list
    </Link>
  )
}

export default PlanetDetailPage
