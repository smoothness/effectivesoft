import { use } from 'react'

import type { Planet } from '@/types'
import { getPlanetBySlug } from '@/api/planets'

interface PlanetDetailProps {
  slug: string
}

function PlanetDetail({ slug }: PlanetDetailProps) {
  const planet: Planet = use(getPlanetBySlug(slug))

  return (
    <div>
      <section className="mb-6">
        <h1 className="!text-8xl !mb-10 [@media(max-width:700px)]:!text-6xl">{planet.name} 🪐</h1>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="pb-2 [@media(max-width:700px)]:!text-2xl">Physical Characteristics</h2>
          <div className="space-y-3">
            <div>
              <span className="text-fuchsia-800">Diameter: </span>
              <span>{planet.diameter} km</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Gravity: </span>
              <span>{planet.gravity}</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Surface Water: </span>
              <span>{planet.surface_water}%</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Rotation Period: </span>
              <span>{planet.rotation_period} hours</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Orbital Period: </span>
              <span>{planet.orbital_period} days</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="pb-2 [@media(max-width:700px)]:!text-2xl">Environmental Data</h2>
          <div className="space-y-3">
            <div>
              <span className="text-fuchsia-800">Climate: </span>
              <span>{planet.climate}</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Terrain: </span>
              <span>{planet.terrain}</span>
            </div>
            <div>
              <span className="text-fuchsia-800">Population: </span>
              <span>{planet.population === 'unknown' ? 'Unknown' : Number(planet.population).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {(planet.residents.length > 0 || planet.films.length > 0) && (
        <section className="mt-8">
          <h2 className="pb-2 mb-4 [@media(max-width:700px)]:!text-2xl">Additional Information</h2>
          <div>
            {planet.residents.length > 0 && (
              <div>
                <span className="text-fuchsia-800">Notable Residents: </span>
                <span>{planet.residents.length} known residents</span>
              </div>
            )}
            {planet.films.length > 0 && (
              <div>
                <span className="text-fuchsia-800">Featured in Films: </span>
                <span>{planet.films.length} Star Wars films</span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}

export default PlanetDetail
