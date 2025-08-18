import { use } from 'react'
import { Link } from 'react-router'

import type { Planet } from '@/types'
import { getPlanets } from '@/api/planets'
import { createPlanetSlug } from '@/utils/planetUtils'

function PlanetsList() {
  const planetsResponse = use(getPlanets())
  const { results: planets } = planetsResponse

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {planets.map((planet: Planet) => {
        const slug = createPlanetSlug(planet.name)
        return (
          <div key={planet.url} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="!mb-4">{planet.name}</h3>
            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <span className="text-fuchsia-800">Climate:</span> {planet.climate}
              </div>
              <div className="text-sm">
                <span className="text-fuchsia-800">Population:</span> {planet.population}
              </div>
              <div className="text-sm">
                <span className="text-fuchsia-800">Terrain:</span> {planet.terrain}
              </div>
            </div>
            <Link
              to={`/planets/${slug}`}
              className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 !text-white px-4 py-2 rounded text-sm transition-colors"
            >
              View Details
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PlanetsList
