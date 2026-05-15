/**
 * Language-Specific Token Exports
 * Centralized re-exports for all language token definitions
 * Imported by the syntax highlighting system
 */

export { baseTokens } from './base'
export { htmlTokens } from './html'
export { cssTokens } from './css'
export { javascriptTokens } from './javascript'
export { typescriptTokens } from './typescript'
export { reactTokens } from './react'
export { pythonTokens } from './python'
export { jsonTokens } from './json'
export { markdownTokens } from './markdown'

// Aggregate all tokens for comprehensive syntax highlighting
import { baseTokens as base } from './base'
import { htmlTokens as html } from './html'
import { cssTokens as css } from './css'
import { javascriptTokens as javascript } from './javascript'
import { typescriptTokens as typescript } from './typescript'
import { reactTokens as react } from './react'
import { pythonTokens as python } from './python'
import { jsonTokens as json } from './json'
import { markdownTokens as markdown } from './markdown'

export const allLanguageTokens = {
  base,
  html,
  css,
  javascript,
  typescript,
  react,
  python,
  json,
  markdown,
} as const
