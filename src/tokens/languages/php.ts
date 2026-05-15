/**
 * PHP Syntax Tokens
 * Focuses on PHP-specific constructs: namespaces, classes, and PHP tags
 *
 * Color Theme: Grape Purple (#9173F5)
 * Identity: Web-focused, dynamic, structured
 */

import { TokenRule } from '../../types/theme'

const phpPrimary = '#9173F5' // Grape purple
const phpSecondary = '#B5A7FF' // Light grape
const phpAccent = '#7C5CFA' // Dark grape

export const phpTokens = (): TokenRule[] => [
  // ========================
  // 🏷️ PHP TAGS
  // ========================
  {
    name: 'PHP Tag',
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: {
      foreground: phpAccent,
    },
  },

  // ========================
  // 🔑 KEYWORDS
  // ========================
  {
    name: 'PHP Keywords',
    scope: ['keyword.control.php', 'storage.type.php'],
    settings: {
      foreground: phpPrimary,
    },
  },

  // ========================
  // 🏗️ CLASS & NAMESPACE
  // ========================
  {
    name: 'PHP Class',
    scope: ['entity.name.class.php'],
    settings: {
      foreground: phpPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'PHP Namespace',
    scope: ['entity.name.namespace.php'],
    settings: {
      foreground: phpSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // ⚙️ FUNCTIONS
  // ========================
  {
    name: 'PHP Function',
    scope: ['entity.name.function.php'],
    settings: {
      foreground: phpAccent,
    },
  },

  // ========================
  // 💲 VARIABLES
  // ========================
  {
    name: 'PHP Variable',
    scope: ['variable.other.php'],
    settings: {
      foreground: phpSecondary,
    },
  },

  // ========================
  // 📦 CONSTANTS & BUILT-INS
  // ========================
  {
    name: 'PHP Constants',
    scope: ['constant.php'],
    settings: {
      foreground: phpPrimary,
    },
  },

  {
    name: 'PHP Built-in Functions',
    scope: ['support.function.builtin.php'],
    settings: {
      foreground: phpAccent,
    },
  },
]
