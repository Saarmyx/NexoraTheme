/**
 * Language Color Definitions
 * Each language has a unique visual identity while maintaining Nexora minimalism
 *
 * Color Strategy:
 * - HTML/Markup: Warm orange (semantic, inviting)
 * - CSS/Style: Cool blue (structure, precision)
 * - JavaScript: Bright yellow (dynamic, energetic)
 * - TypeScript: Cyan (modern, typed)
 * - React: Purple (component-based)
 * - Python: Green (pythonic, clean)
 * - JSON/Data: Coral (structured)
 * - Markdown: Pink (content-focused)
 */

export const languageColors = {
  // ========================
  // 🏷️ HTML / MARKUP LANGUAGES
  // ========================
  html: {
    name: 'HTML',
    primary: '#F97316', // Warm orange
    secondary: '#FB923C', // Light orange
    accent: '#EA580C', // Dark orange
  },

  // ========================
  // 🎨 CSS / STYLE LANGUAGES
  // ========================
  css: {
    name: 'CSS',
    primary: '#3B82F6', // Cool blue
    secondary: '#60A5FA', // Light blue
    accent: '#2563EB', // Dark blue
  },

  // ========================
  // ⚡ JAVASCRIPT
  // ========================
  javascript: {
    name: 'JavaScript',
    primary: '#F0B35A', // Bright yellow
    secondary: '#F5C965', // Light yellow
    accent: '#D4952D', // Dark yellow
  },

  // ========================
  // 🔷 TYPESCRIPT
  // ========================
  typescript: {
    name: 'TypeScript',
    primary: '#00D9FF', // Cyan/aqua
    secondary: '#22E8FF', // Light cyan
    accent: '#00A8CC', // Dark cyan
  },

  // ========================
  // ⚛️ REACT / JSX
  // ========================
  react: {
    name: 'React/JSX',
    primary: '#8B5CF6', // Purple
    secondary: '#A78BFA', // Light purple
    accent: '#7C3AED', // Dark purple
  },

  // ========================
  // 🐍 PYTHON
  // ========================
  python: {
    name: 'Python',
    primary: '#22C55E', // Fresh green
    secondary: '#4ADE80', // Light green
    accent: '#16A34A', // Dark green
  },

  // ========================
  // 📦 JSON / DATA FORMATS
  // ========================
  json: {
    name: 'JSON',
    primary: '#FF6B6B', // Coral red
    secondary: '#FF8E8E', // Light coral
    accent: '#E05A5A', // Dark coral
  },

  // ========================
  // 📝 MARKDOWN / DOCUMENTATION
  // ========================
  markdown: {
    name: 'Markdown',
    primary: '#E879F9', // Vibrant pink
    secondary: '#F0A8FF', // Light pink
    accent: '#D946EF', // Dark pink
  },

  // ========================
  // 🔧 YAML / CONFIG
  // ========================
  yaml: {
    name: 'YAML',
    primary: '#A3BE8C', // Soft green
    secondary: '#B8D4A5', // Light green
    accent: '#8DB17F', // Dark green
  },

  // ========================
  // 📄 XML / CONFIGURATION
  // ========================
  xml: {
    name: 'XML',
    primary: '#F97316', // Match HTML (related)
    secondary: '#FB923C',
    accent: '#EA580C',
  },

  // ========================
  // 🐘 PHP
  // ========================
  php: {
    name: 'PHP',
    primary: '#9173F5', // Grape purple
    secondary: '#B5A7FF', // Light grape
    accent: '#7C5CFA', // Dark grape
  },

  // ========================
  // 🍂 RUST
  // ========================
  rust: {
    name: 'Rust',
    primary: '#CE4D1A', // Rust orange
    secondary: '#E5622E', // Light rust
    accent: '#A23F1A', // Dark rust
  },

  // ========================
  // 🐹 GO
  // ========================
  go: {
    name: 'Go',
    primary: '#00ADD8', // Go cyan
    secondary: '#26C5E8', // Light cyan
    accent: '#0099BB', // Dark cyan
  },
} as const

export type LanguageName = keyof typeof languageColors
export type LanguageColor = typeof languageColors.html
