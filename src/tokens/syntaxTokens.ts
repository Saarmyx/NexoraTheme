import { palette } from './palette'
import { TokenRule } from '../types/theme'

/**
 * Syntax token color rules for code highlighting
 * The accent color is injected per theme variant
 *
 * @param accentColor - The theme's primary accent color for keywords/functions
 * @returns Array of token color rules
 */
export const syntaxTokens = (accentColor: string): TokenRule[] => [
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
  // 🔑 KEYWORDS & STORAGE
  // ========================
  {
    name: 'Keywords',
    scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
    settings: {
      foreground: accentColor,
    },
  },

  // ========================
  // ⚙️ FUNCTIONS & CALLS
  // ========================
  {
    name: 'Function Names',
    scope: [
      'entity.name.function',
      'entity.name.function.member',
      'support.function',
      'meta.function-call.generic',
    ],
    settings: {
      foreground: accentColor,
    },
  },

  // ========================
  // 📝 STRINGS
  // ========================
  {
    name: 'Strings',
    scope: ['string'],
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
  // 🏗️ CLASSES & TYPES
  // ========================
  {
    name: 'Class Names',
    scope: ['entity.name.class', 'entity.name.type', 'entity.name.type.class'],
    settings: {
      foreground: palette.syntax.class,
    },
  },

  {
    name: 'Type Names',
    scope: ['entity.name.type.interface', 'entity.name.type.type-parameter'],
    settings: {
      foreground: palette.syntax.type,
    },
  },

  // ========================
  // 🔤 VARIABLES & PROPERTIES
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
  // 📚 IMPORTS & EXPORTS
  // ========================
  {
    name: 'Import/Export',
    scope: ['keyword.import', 'keyword.export', 'meta.import', 'meta.export'],
    settings: {
      foreground: accentColor,
    },
  },

  // ========================
  // 🏷️ MARKUP (HTML, XML, etc.)
  // ========================
  {
    name: 'HTML Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: accentColor,
    },
  },

  {
    name: 'HTML Attributes',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: palette.syntax.type,
    },
  },

  // ========================
  // 🎨 CSS
  // ========================
  {
    name: 'CSS Property',
    scope: ['support.type.property-name'],
    settings: {
      foreground: palette.syntax.variable,
    },
  },

  {
    name: 'CSS Value',
    scope: ['support.constant.property-value', 'constant.other.color'],
    settings: {
      foreground: palette.syntax.string,
    },
  },

  // ========================
  // 🌐 REGEX
  // ========================
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: palette.syntax.number,
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
]
