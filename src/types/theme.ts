/**
 * VS Code Theme Definition Structure
 * Represents a complete theme with all color and token mappings
 */

export interface ThemeDefinition {
  name: string
  type: 'dark' | 'light'
  semanticHighlighting: boolean
  colors: Record<string, string>
  tokenColors: TokenRule[]
}

/**
 * Accent color pair (primary + hover state)
 * Used for interactive elements and highlights
 */
export interface AccentColors {
  accent: string
  accentHover: string
}

/**
 * Token Color Rule
 * Defines how specific code syntax elements should be colored
 */
export interface TokenRule {
  name: string
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: 'italic' | 'bold' | 'underline' | 'strikethrough'
  }
}
