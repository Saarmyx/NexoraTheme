import { palette } from '../palette'
import { TokenRule } from '../../types/theme'

/**
 * Base syntax tokens shared across all languages
 * These are common constructs that appear in every language:
 * - Comments
 * - Strings
 * - Numbers
 * - Basic operators
 */
export const baseTokens = (accentColor: string): TokenRule[] => [
  // ========================
  // 💬 COMMENTS
  // ========================
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: palette.neutral.light,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📝 STRINGS
  // ========================
  {
    name: 'Strings',
    scope: ['string', 'string.quoted'],
    settings: {
      foreground: palette.syntax.string,
    },
  },

  {
    name: 'String Escape',
    scope: ['constant.character.escape'],
    settings: {
      foreground: palette.syntax.number,
    },
  },

  // ========================
  // 🔢 NUMBERS & BOOLEANS
  // ========================
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: palette.syntax.number,
    },
  },

  {
    name: 'Boolean',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: palette.syntax.boolean,
    },
  },

  // ========================
  // ⚠️ INVALID
  // ========================
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: palette.semantic.error,
    },
  },

  // ========================
  // 🎯 OPERATORS & PUNCTUATION
  // ========================
  {
    name: 'Operators',
    scope: ['keyword.operator'],
    settings: {
      foreground: accentColor,
    },
  },

  {
    name: 'Punctuation',
    scope: ['punctuation'],
    settings: {
      foreground: palette.neutral.lighter,
    },
  },

  // ========================
  // 📚 COMMON
  // ========================
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: palette.syntax.variable,
    },
  },

  {
    name: 'Object Properties',
    scope: ['meta.object-literal.key', 'meta.object.member', 'variable.object.property'],
    settings: {
      foreground: palette.syntax.variable,
    },
  },
]
