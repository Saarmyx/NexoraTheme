/**
 * Python Syntax Tokens
 * Focuses on Python-specific constructs: decorators, imports, classes, defs
 *
 * Color Theme: Fresh Green (#22C55E)
 * Identity: Pythonic, clean, natural
 */

import { TokenRule } from '../../types/theme'

const pyPrimary = '#22C55E' // Fresh green
const pySecondary = '#4ADE80' // Light green
const pyAccent = '#16A34A' // Dark green

export const pythonTokens = (): TokenRule[] => [
  // ========================
  // 🐍 KEYWORDS
  // ========================
  {
    name: 'Python Keywords',
    scope: ['keyword.control.python'],
    settings: {
      foreground: pyPrimary,
    },
  },

  // ========================
  // 🎯 DECORATORS
  // ========================
  {
    name: 'Python Decorator',
    scope: ['entity.name.decorator.python'],
    settings: {
      foreground: pyAccent,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🏗️ CLASS & FUNCTION DEFINITION
  // ========================
  {
    name: 'Python Class',
    scope: ['entity.name.class.python'],
    settings: {
      foreground: pyPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'Python Function',
    scope: ['entity.name.function.python'],
    settings: {
      foreground: pySecondary,
    },
  },

  // ========================
  // 🔤 IMPORTS
  // ========================
  {
    name: 'Python Import',
    scope: ['keyword.control.import.python'],
    settings: {
      foreground: pyPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📦 BUILT-INS
  // ========================
  {
    name: 'Python Built-in',
    scope: ['support.function.builtin.python'],
    settings: {
      foreground: pyAccent,
    },
  },

  {
    name: 'Python Built-in Types',
    scope: ['support.type.python'],
    settings: {
      foreground: pySecondary,
    },
  },

  // ========================
  // 💬 DOCUMENTATION STRINGS
  // ========================
  {
    name: 'Python Docstring',
    scope: ['string.quoted.single.block.python', 'string.quoted.double.block.python'],
    settings: {
      foreground: '#A3BE8C',
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🔑 KEYWORDS (SPECIAL)
  // ========================
  {
    name: 'Python Control Flow',
    scope: ['keyword.control.flow.python'],
    settings: {
      foreground: pyPrimary,
    },
  },

  // ========================
  // 🎨 MAGIC METHODS
  // ========================
  {
    name: 'Python Magic Method',
    scope: ['entity.name.function.dunder.python'],
    settings: {
      foreground: pyAccent,
      fontStyle: 'italic',
    },
  },
]
