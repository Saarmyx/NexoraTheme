import { ThemeDefinition } from '../types/theme'

/**
 * Theme validator
 * Ensures generated themes meet quality and VS Code API requirements
 */

export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Validate a complete theme definition
 */
export const validateTheme = (theme: ThemeDefinition): ValidationResult => {
  const errors: string[] = []
  const warnings: string[] = []

  // Check required fields
  if (!theme.name || theme.name.trim() === '') {
    errors.push('Theme must have a non-empty name')
  }

  if (!theme.type || (theme.type !== 'dark' && theme.type !== 'light')) {
    errors.push('Theme type must be "dark" or "light"')
  }

  if (!theme.colors || typeof theme.colors !== 'object') {
    errors.push('Theme must have a colors object')
  }

  if (!Array.isArray(theme.tokenColors)) {
    errors.push('Theme must have tokenColors array')
  }

  // Validate colors
  if (theme.colors) {
    for (const [key, value] of Object.entries(theme.colors)) {
      if (!isValidHexColor(value)) {
        errors.push(`Invalid color value for "${key}": ${value}`)
      }
    }
  }

  // Check for essential colors
  const essentialColors = [
    'editor.background',
    'editor.foreground',
    'editor.selectionBackground',
    'editorCursor.foreground',
    'statusBar.background',
    'button.background',
  ]

  for (const color of essentialColors) {
    if (!theme.colors?.[color]) {
      errors.push(`Missing essential color: ${color}`)
    }
  }

  // Check token colors have valid scopes
  if (theme.tokenColors) {
    for (const token of theme.tokenColors) {
      if (!token.scope || (Array.isArray(token.scope) && token.scope.length === 0)) {
        warnings.push(`Token rule "${token.name}" has no scope defined`)
      }

      if (!token.settings) {
        warnings.push(`Token rule "${token.name}" has no settings`)
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Helper: Validate hex color format
 */
function isValidHexColor(color: string): boolean {
  if (typeof color !== 'string') return false
  return /^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(color)
}

/**
 * Helper: Validate color contrast ratio (WCAG)
 * Useful for accessibility checks
 */
export const getContrastRatio = (hex1: string, hex2: string): number => {
  const lum1 = getLuminance(hex1)
  const lum2 = getLuminance(hex2)
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Helper: Calculate relative luminance for contrast ratio
 */
function getLuminance(hex: string): number {
  const rgb = parseInt(hex.slice(1), 16)
  const r = (rgb >> 16) & 255
  const g = (rgb >> 8) & 255
  const b = rgb & 255

  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Report validation results
 */
export const reportValidationResult = (result: ValidationResult, themeName: string) => {
  if (result.valid) {
    console.log(`✅ ${themeName} is valid`)
  } else {
    console.error(`❌ ${themeName} validation failed:`)
    for (const error of result.errors) {
      console.error(`  • ${error}`)
    }
  }

  if (result.warnings.length > 0) {
    console.warn(`⚠️  ${themeName} has warnings:`)
    for (const warning of result.warnings) {
      console.warn(`  • ${warning}`)
    }
  }
}
