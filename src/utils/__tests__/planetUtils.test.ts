import { createPlanetSlug, slugToPlanetName, getPlanetIdFromUrl } from '../planetUtils'

describe('planetUtils', () => {
  describe('createPlanetSlug', () => {
    it('should convert a simple name to a slug', () => {
      expect(createPlanetSlug('Tatooine')).toBe('tatooine')
    })

    it('should handle names with spaces', () => {
      expect(createPlanetSlug('Hoth and Echo Base')).toBe('hoth-and-echo-base')
    })

    it('should handle names with special characters', () => {
      expect(createPlanetSlug('Coruscant (Imperial Center)')).toBe('coruscant-imperial-center')
    })

    it('should handle names with mixed case', () => {
      expect(createPlanetSlug('Dagobah System')).toBe('dagobah-system')
    })
  })

  describe('slugToPlanetName', () => {
    it('should convert a simple slug to a name', () => {
      expect(slugToPlanetName('tatooine')).toBe('Tatooine')
    })

    it('should handle slugs with hyphens', () => {
      expect(slugToPlanetName('hoth-and-echo-base')).toBe('Hoth And Echo Base')
    })
  })

  describe('getPlanetIdFromUrl', () => {
    it('should extract the planet ID from a valid SWAPI URL', () => {
      expect(getPlanetIdFromUrl('https://swapi.dev/api/planets/1/')).toBe('1')
    })

    it('should extract the planet ID from another valid SWAPI URL', () => {
      expect(getPlanetIdFromUrl('http://swapi.dev/api/planets/10/')).toBe('10')
    })

    it('should return an empty string for an invalid URL', () => {
      expect(getPlanetIdFromUrl('not a url')).toBe('')
    })

    it('should return an empty string if no ID is present', () => {
      expect(getPlanetIdFromUrl('https://swapi.dev/api/planets/')).toBe('')
    })
  })
})
