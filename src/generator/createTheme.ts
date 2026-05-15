import { palette } from '../tokens/palette'
import { baseColors } from '../tokens/baseColors'
import { baseTokens } from '../tokens/languages'
import { htmlTokens } from '../tokens/languages/html'
import { cssTokens } from '../tokens/languages/css'
import { javascriptTokens } from '../tokens/languages/javascript'
import { typescriptTokens } from '../tokens/languages/typescript'
import { reactTokens } from '../tokens/languages/react'
import { pythonTokens } from '../tokens/languages/python'
import { jsonTokens } from '../tokens/languages/json'
import { markdownTokens } from '../tokens/languages/markdown'
import { ThemeDefinition, AccentColors } from '../types/theme'

/**
 * Generates a complete VS Code theme with:
 * - Consistent UI colors (same across all accents)
 * - Language-specific syntax highlighting (different per language)
 * - Accent colors applied to control elements
 *
 * Result: ONE theme file with comprehensive syntax highlighting for all languages
 *
 * @param name - Display name for the theme
 * @param accent - Accent color configuration (primary + hover)
 * @returns Complete theme definition ready for VS Code
 */
export const createTheme = (name: string, accent: AccentColors): ThemeDefinition => {
  return {
    name,
    type: 'dark',
    semanticHighlighting: true,

    colors: {
      ...baseColors,

      // Override with accent colors for UI elements
      'editorCursor.foreground': accent.accent,
      'activityBar.foreground': accent.accent,
      'statusBar.background': accent.accent,
      'button.background': accent.accent,
      'button.hoverBackground': accent.accentHover,
      focusBorder: accent.accent,
      'badge.background': accent.accent,
      'textLink.foreground': accent.accent,
      'editorInfo.foreground': accent.accent,
      'list.focusOutline': accent.accent,
      'checkbox.foreground': accent.accent,

      // Status bar debugging
      'statusBar.debuggingBackground': accentToDarkened(accent.accent),
      'statusBarItem.hoverBackground': accent.accentHover,
      'statusBarItem.activeBackground': accentToDarkened(accent.accentHover),
    },

    // Comprehensive syntax highlighting for all languages
    tokenColors: [
      // Base tokens (common across all languages)
      ...baseTokens(accent.accent),

      // Language-specific tokens (extend and override base)
      ...htmlTokens(),
      ...cssTokens(),
      ...javascriptTokens(),
      ...typescriptTokens(),
      ...reactTokens(),
      ...pythonTokens(),
      ...jsonTokens(),
      ...markdownTokens(),
    ],
  }
}

/**
 * Helper: Darkens an accent color for debugging state
 * Reduces brightness by approximately 20%
 */
function accentToDarkened(hex: string): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * -20)
  const R = Math.max(0, (num >> 16) + amt)
  const G = Math.max(0, ((num >> 8) & 0x00ff) + amt)
  const B = Math.max(0, (num & 0x0000ff) + amt)
  return (
    '#' +
    (0x1000000 + (R < 255 ? R : 255) * 0x10000 + (G < 255 ? G : 255) * 0x100 + (B < 255 ? B : 255))
      .toString(16)
      .slice(1)
  )
}
