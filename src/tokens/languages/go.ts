/**
 * Go (Golang) Syntax Tokens
 * Focuses on Go-specific constructs: goroutines, channels, interfaces
 *
 * Color Theme: Go Cyan (#00ADD8)
 * Identity: Concurrency-focused, minimalist, fast
 */

import { TokenRule } from '../../types/theme'

const goPrimary = '#00ADD8' // Go cyan
const goSecondary = '#26C5E8' // Light cyan
const goAccent = '#0099BB' // Dark cyan

export const goTokens = (): TokenRule[] => [
  // ========================
  // 🔑 KEYWORDS
  // ========================
  {
    name: 'Go Keywords',
    scope: ['keyword.control.go', 'storage.type.go'],
    settings: {
      foreground: goPrimary,
    },
  },

  // ========================
  // 🏗️ TYPES & INTERFACES
  // ========================
  {
    name: 'Go Type',
    scope: ['entity.name.type.go'],
    settings: {
      foreground: goAccent,
    },
  },

  {
    name: 'Go Interface',
    scope: ['entity.name.interface.go'],
    settings: {
      foreground: goSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // ⚙️ FUNCTIONS
  // ========================
  {
    name: 'Go Function',
    scope: ['entity.name.function.go'],
    settings: {
      foreground: goAccent,
    },
  },

  {
    name: 'Go Method',
    scope: ['entity.name.function.method.go'],
    settings: {
      foreground: goAccent,
    },
  },

  // ========================
  // 📦 IMPORTS & PACKAGES
  // ========================
  {
    name: 'Go Import',
    scope: ['keyword.control.import.go'],
    settings: {
      foreground: goPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'Go Package',
    scope: ['keyword.control.package.go'],
    settings: {
      foreground: goPrimary,
      fontStyle: 'bold',
    },
  },

  // ========================
  // ⚡ GOROUTINES & CHANNELS
  // ========================
  {
    name: 'Go go keyword',
    scope: ['keyword.control.go-statement.go'],
    settings: {
      foreground: goPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'Go Channel Operation',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: goSecondary,
    },
  },

  // ========================
  // 📚 DEFER & PANIC
  // ========================
  {
    name: 'Go Defer',
    scope: ['keyword.control.defer.go'],
    settings: {
      foreground: goPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'Go Error Handling',
    scope: ['support.function.builtin.go.error'],
    settings: {
      foreground: '#FF6B6B',
    },
  },
]
