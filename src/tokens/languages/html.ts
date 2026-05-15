/**
 * HTML / Markup Language Syntax Tokens
 * Focuses on semantic HTML elements, attributes, and structure
 *
 * Color Theme: Warm Orange (#F97316)
 * Identity: Semantic, inviting, structural
 */

import { TokenRule } from '../../types/theme'

const htmlPrimary = '#F97316' // Warm orange
const htmlSecondary = '#FB923C' // Light orange
const htmlAccent = '#EA580C' // Dark orange

export const htmlTokens = (): TokenRule[] => [
  // ========================
  // 🏷️ TAGS
  // ========================
  {
    name: 'HTML Tag Names',
    scope: ['entity.name.tag', 'entity.name.tag.html'],
    settings: {
      foreground: htmlPrimary,
    },
  },

  {
    name: 'HTML Tag Brackets',
    scope: ['punctuation.definition.tag.html', 'punctuation.definition.tag'],
    settings: {
      foreground: htmlAccent,
    },
  },

  // ========================
  // 🎯 ATTRIBUTES
  // ========================
  {
    name: 'HTML Attributes',
    scope: ['entity.other.attribute-name', 'entity.other.attribute-name.html'],
    settings: {
      foreground: htmlSecondary,
    },
  },

  {
    name: 'HTML Attribute Values',
    scope: ['string.quoted.single.html', 'string.quoted.double.html'],
    settings: {
      foreground: '#A3BE8C', // Neutral string color
    },
  },

  // ========================
  // 🔤 SPECIAL TAGS
  // ========================
  {
    name: 'HTML Script Tag',
    scope: ['entity.name.tag.script.html'],
    settings: {
      foreground: htmlPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'HTML Style Tag',
    scope: ['entity.name.tag.style.html'],
    settings: {
      foreground: htmlPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📝 ENTITIES
  // ========================
  {
    name: 'HTML Entity',
    scope: ['constant.character.entity', 'constant.character.entity.html'],
    settings: {
      foreground: htmlSecondary,
    },
  },

  // ========================
  // 💬 HTML COMMENTS
  // ========================
  {
    name: 'HTML Comment',
    scope: ['comment.block.html'],
    settings: {
      foreground: '#6B7280',
      fontStyle: 'italic',
    },
  },
]
