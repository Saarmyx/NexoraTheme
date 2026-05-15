import { palette, AccentName, AccentVariation } from '../tokens/palette'
import { AccentColors } from '../types/theme'

/**
 * Theme metadata
 * Describes a theme variant with its accent configuration
 */
export interface ThemeConfig {
  id: AccentName
  label: string
  description?: string
  accent: AccentColors
}

/**
 * Central theme registry
 * Single source of truth for all theme variants
 * Add new themes here without modifying build logic
 */
export const themeRegistry: ThemeConfig[] = [
  {
    id: 'red',
    label: 'Nexora Red',
    description: 'Bold red accent for dynamic workflows',
    accent: {
      accent: palette.accents.red.primary,
      accentHover: palette.accents.red.hover,
    },
  },
  {
    id: 'blue',
    label: 'Nexora Blue',
    description: 'Cool blue accent for focus and clarity',
    accent: {
      accent: palette.accents.blue.primary,
      accentHover: palette.accents.blue.hover,
    },
  },
  {
    id: 'green',
    label: 'Nexora Green',
    description: 'Fresh green accent for productivity',
    accent: {
      accent: palette.accents.green.primary,
      accentHover: palette.accents.green.hover,
    },
  },
  {
    id: 'purple',
    label: 'Nexora Purple',
    description: 'Creative purple accent for inspiration',
    accent: {
      accent: palette.accents.purple.primary,
      accentHover: palette.accents.purple.hover,
    },
  },
  {
    id: 'orange',
    label: 'Nexora Orange',
    description: 'Warm orange accent for energy',
    accent: {
      accent: palette.accents.orange.primary,
      accentHover: palette.accents.orange.hover,
    },
  },
]

/**
 * Get theme config by ID
 * Useful for validation and lookups
 */
export const getThemeConfig = (id: string): ThemeConfig | undefined => {
  return themeRegistry.find((t) => t.id === id)
}

/**
 * Get all theme IDs
 * Useful for validation and file generation
 */
export const getThemeIds = (): AccentName[] => {
  return themeRegistry.map((t) => t.id)
}
