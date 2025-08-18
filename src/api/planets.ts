const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT

import type { Planet } from '@/types'
import { createPlanetSlug } from '@/utils/planetUtils'

type PlanetsListPromise = {
  results: Planet[]
  count: number
  next: string | null
  previous: string | null
}

let planetsPromise: Promise<PlanetsListPromise> | null = null

async function getPlanets(): Promise<PlanetsListPromise> {
  planetsPromise = planetsPromise ?? fetch(`${API_BASE_URL}planets/`).then((response) => response.json())

  return planetsPromise
}

async function getPlanetBySlug(slug: string): Promise<Planet> {
  const planetsResponse = await getPlanets()
  const planet = planetsResponse.results.find((p) => createPlanetSlug(p.name) === slug)

  if (!planet) {
    throw new Error(`Planet with not found 💩`)
  }

  return planet
}

export { getPlanets, getPlanetBySlug }
