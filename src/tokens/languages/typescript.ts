/**
 * TypeScript Syntax Tokens
 * Extends JavaScript with type annotations, interfaces, and generics
 *
 * Color Theme: Cyan (#00D9FF)
 * Identity: Modern, precise, typed
 */

import { TokenRule } from '../../types/theme'

const tsPrimary = '#00D9FF' // Cyan
const tsSecondary = '#22E8FF' // Light cyan
const tsAccent = '#00A8CC' // Dark cyan

export const typescriptTokens = (): TokenRule[] => [
  // ========================
  // 🔷 TYPE ANNOTATIONS
  // ========================
  {
    name: 'TS Type Names',
    scope: ['entity.name.type.ts', 'entity.name.type.interface.ts'],
    settings: {
      foreground: tsPrimary,
    },
  },

  {
    name: 'TS Type Keyword',
    scope: ['keyword.control.type.ts', 'storage.type.type.ts'],
    settings: {
      foreground: tsPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🔧 GENERICS
  // ========================
  {
    name: 'TS Generic Type',
    scope: ['meta.type.parameters.ts', 'meta.generics.ts'],
    settings: {
      foreground: tsSecondary,
    },
  },

  // ========================
  // 📋 INTERFACES
  // ========================
  {
    name: 'TS Interface',
    scope: ['meta.interface.ts'],
    settings: {
      foreground: tsPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'TS Interface Property',
    scope: ['meta.interface.body.ts'],
    settings: {
      foreground: tsAccent,
    },
  },

  // ========================
  // 🎯 DECORATORS
  // ========================
  {
    name: 'TS Decorator',
    scope: ['meta.decorator.ts'],
    settings: {
      foreground: tsPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🔑 KEYWORDS
  // ========================
  {
    name: 'TS Keywords',
    scope: ['keyword.control.ts', 'storage.type.ts'],
    settings: {
      foreground: tsPrimary,
    },
  },

  // ========================
  // 📦 NAMESPACES
  // ========================
  {
    name: 'TS Namespace',
    scope: ['entity.name.namespace.ts'],
    settings: {
      foreground: tsSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // ⚙️ FUNCTIONS WITH TYPES
  // ========================
  {
    name: 'TS Function',
    scope: ['entity.name.function.ts'],
    settings: {
      foreground: tsAccent,
    },
  },

  {
    name: 'TS Method',
    scope: ['entity.name.function.method.ts'],
    settings: {
      foreground: tsAccent,
    },
  },

  // ========================
  // 🔤 ENUM & CONST
  // ========================
  {
    name: 'TS Enum',
    scope: ['entity.name.enum.ts'],
    settings: {
      foreground: tsPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'TS Const Assertion',
    scope: ['keyword.control.as.ts'],
    settings: {
      foreground: tsPrimary,
    },
  },
]
