/**
 * JSON / Data Format Tokens
 * Focuses on structure, keys, and values in JSON/JSONC
 *
 * Color Theme: Coral Red (#FF6B6B)
 * Identity: Structured, clear, data-focused
 */

import { TokenRule } from '../../types/theme'

const jsonPrimary = '#FF6B6B' // Coral red
const jsonSecondary = '#FF8E8E' // Light coral
const jsonAccent = '#E05A5A' // Dark coral

export const jsonTokens = (): TokenRule[] => [
  // ========================
  // 🔑 KEYS
  // ========================
  {
    name: 'JSON Key',
    scope: ['meta.structure.dictionary.json', 'string.quoted.double.json'],
    settings: {
      foreground: jsonPrimary,
    },
  },

  {
    name: 'JSON Property Name',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: jsonAccent,
    },
  },

  // ========================
  // 💬 VALUES
  // ========================
  {
    name: 'JSON String Value',
    scope: ['string.quoted.double.json'],
    settings: {
      foreground: '#A3BE8C', // Neutral green
    },
  },

  {
    name: 'JSON Number',
    scope: ['constant.numeric.json'],
    settings: {
      foreground: jsonSecondary,
    },
  },

  {
    name: 'JSON Boolean',
    scope: ['constant.language.json'],
    settings: {
      foreground: jsonPrimary,
    },
  },

  {
    name: 'JSON Null',
    scope: ['constant.language.null.json'],
    settings: {
      foreground: jsonAccent,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🏗️ STRUCTURE
  // ========================
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.separator.dictionary.key-value.json'],
    settings: {
      foreground: jsonSecondary,
    },
  },

  {
    name: 'JSON Array Brackets',
    scope: ['punctuation.section.array.json'],
    settings: {
      foreground: jsonAccent,
    },
  },

  // ========================
  // 💬 JSONC COMMENTS
  // ========================
  {
    name: 'JSONC Comment',
    scope: ['comment.line.double-slash.json'],
    settings: {
      foreground: '#6B7280',
      fontStyle: 'italic',
    },
  },

  {
    name: 'JSONC Block Comment',
    scope: ['comment.block.json'],
    settings: {
      foreground: '#6B7280',
      fontStyle: 'italic',
    },
  },
]
