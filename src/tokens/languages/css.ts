/**
 * CSS / Style Syntax Tokens
 * Focuses on selectors, properties, values, and vendor prefixes
 *
 * Color Theme: Cool Blue (#3B82F6)
 * Identity: Precise, structural, trustworthy
 */

import { TokenRule } from '../../types/theme'

const cssPrimary = '#3B82F6' // Cool blue
const cssSecondary = '#60A5FA' // Light blue
const cssAccent = '#2563EB' // Dark blue

export const cssTokens = (): TokenRule[] => [
  // ========================
  // 🎯 SELECTORS
  // ========================
  {
    name: 'CSS Tag Selector',
    scope: ['entity.name.tag.css'],
    settings: {
      foreground: cssPrimary,
    },
  },

  {
    name: 'CSS Class Selector',
    scope: ['entity.other.attribute-name.class.css'],
    settings: {
      foreground: cssSecondary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'CSS ID Selector',
    scope: ['entity.other.attribute-name.id.css'],
    settings: {
      foreground: cssAccent,
      fontStyle: 'bold',
    },
  },

  {
    name: 'CSS Pseudo-class',
    scope: ['entity.other.pseudo-class.css'],
    settings: {
      foreground: cssSecondary,
    },
  },

  {
    name: 'CSS Pseudo-element',
    scope: ['entity.other.pseudo-element.css'],
    settings: {
      foreground: cssAccent,
    },
  },

  // ========================
  // 🔧 PROPERTIES
  // ========================
  {
    name: 'CSS Property Name',
    scope: ['support.type.property-name.css'],
    settings: {
      foreground: cssAccent,
    },
  },

  {
    name: 'CSS Property Value',
    scope: ['support.constant.property-value.css'],
    settings: {
      foreground: cssSecondary,
    },
  },

  // ========================
  // 🎨 COLORS
  // ========================
  {
    name: 'CSS Color Hex',
    scope: ['constant.other.color.rgb-value.css', 'constant.other.color.hex.css'],
    settings: {
      foreground: '#F0B35A', // Warm color for colors
    },
  },

  // ========================
  // 🔢 UNITS
  // ========================
  {
    name: 'CSS Unit',
    scope: ['keyword.other.unit.css'],
    settings: {
      foreground: cssSecondary,
    },
  },

  // ========================
  // 🔗 AT-RULES
  // ========================
  {
    name: 'CSS At-rule',
    scope: ['keyword.control.at-rule.css'],
    settings: {
      foreground: cssPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📝 VENDOR PREFIX
  // ========================
  {
    name: 'CSS Vendor Prefix',
    scope: ['vendor.prefix.css'],
    settings: {
      foreground: cssAccent,
    },
  },
]
