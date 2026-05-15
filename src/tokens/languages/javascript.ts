/**
 * JavaScript Syntax Tokens
 * Focuses on keywords, functions, objects, and dynamic constructs
 *
 * Color Theme: Bright Yellow (#F0B35A)
 * Identity: Dynamic, energetic, expressive
 */

import { TokenRule } from '../../types/theme'

const jsPrimary = '#F0B35A' // Bright yellow
const jsSecondary = '#F5C965' // Light yellow
const jsAccent = '#D4952D' // Dark yellow

export const javascriptTokens = (): TokenRule[] => [
  // ========================
  // 🔑 KEYWORDS
  // ========================
  {
    name: 'JS Keywords',
    scope: ['keyword.control.js', 'keyword.operator.js', 'storage.type.js'],
    settings: {
      foreground: jsPrimary,
    },
  },

  // ========================
  // ⚙️ FUNCTIONS
  // ========================
  {
    name: 'JS Function Names',
    scope: ['entity.name.function.js', 'support.function.js', 'meta.function-call.generic.js'],
    settings: {
      foreground: jsSecondary,
    },
  },

  {
    name: 'JS Method Names',
    scope: ['meta.method.js', 'entity.name.function.method.js'],
    settings: {
      foreground: jsSecondary,
    },
  },

  // ========================
  // 📦 OBJECTS & PROPERTIES
  // ========================
  {
    name: 'JS Object Key',
    scope: ['meta.object-literal.key.js'],
    settings: {
      foreground: jsAccent,
    },
  },

  {
    name: 'JS Object Property',
    scope: ['variable.other.object.property.js'],
    settings: {
      foreground: jsAccent,
    },
  },

  // ========================
  // 🔤 VARIABLES
  // ========================
  {
    name: 'JS Variable Declaration',
    scope: ['meta.definition.variable.js'],
    settings: {
      foreground: jsPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📚 IMPORTS/EXPORTS
  // ========================
  {
    name: 'JS Import/Export',
    scope: ['keyword.control.import.js', 'keyword.control.export.js'],
    settings: {
      foreground: jsPrimary,
      fontStyle: 'bold',
    },
  },

  // ========================
  // 💬 TEMPLATES
  // ========================
  {
    name: 'JS Template String',
    scope: ['string.template.js', 'string.template.expression.js'],
    settings: {
      foreground: '#A3BE8C',
    },
  },

  {
    name: 'JS Template Expression',
    scope: ['meta.template.expression.js'],
    settings: {
      foreground: jsAccent,
    },
  },
]
