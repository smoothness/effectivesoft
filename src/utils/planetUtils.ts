// Converts a planet name to a URL-friendly slug
export function createPlanetSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Converts a slug back to a planet name for matching
export function slugToPlanetName(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

// Extracts planet ID from the SWAPI URL
export function getPlanetIdFromUrl(url: string): string {
  const matches = url.match(/\/planets\/(\d+)\//)
  return matches ? matches[1] : ''
}
