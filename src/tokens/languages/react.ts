/**
 * React / JSX Syntax Tokens
 * Extends JavaScript/TypeScript with component syntax and JSX-specific constructs
 *
 * Color Theme: Purple (#8B5CF6)
 * Identity: Component-based, creative, compositional
 */

import { TokenRule } from '../../types/theme'

const reactPrimary = '#8B5CF6' // Purple
const reactSecondary = '#A78BFA' // Light purple
const reactAccent = '#7C3AED' // Dark purple

export const reactTokens = (): TokenRule[] => [
  // ========================
  // ⚛️ JSX TAGS
  // ========================
  {
    name: 'JSX Component Name',
    scope: ['entity.name.tag.jsx', 'support.class.component.jsx'],
    settings: {
      foreground: reactPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'JSX Tag Name',
    scope: ['entity.name.tag.open.jsx', 'entity.name.tag.close.jsx'],
    settings: {
      foreground: reactAccent,
    },
  },

  // ========================
  // 🔧 JSX ATTRIBUTES
  // ========================
  {
    name: 'JSX Attribute Name',
    scope: ['entity.other.attribute-name.jsx'],
    settings: {
      foreground: reactSecondary,
    },
  },

  {
    name: 'JSX Attribute Value',
    scope: ['string.attributed-string.jsx', 'string.jsx'],
    settings: {
      foreground: '#A3BE8C',
    },
  },

  // ========================
  // 📦 PROPS
  // ========================
  {
    name: 'JSX Spread Operator',
    scope: ['keyword.operator.spread.jsx'],
    settings: {
      foreground: reactPrimary,
    },
  },

  {
    name: 'JSX Props',
    scope: ['variable.other.object.property.jsx'],
    settings: {
      foreground: reactAccent,
    },
  },

  // ========================
  // 🎯 EXPRESSIONS
  // ========================
  {
    name: 'JSX Expression',
    scope: ['meta.embedded.expression.jsx', 'meta.jsx.expression.ts'],
    settings: {
      foreground: reactSecondary,
    },
  },

  // ========================
  // 🏗️ HOOKS
  // ========================
  {
    name: 'React Hooks',
    scope: ['support.function.hook.react.jsx', 'support.function.hook.react.tsx'],
    settings: {
      foreground: reactPrimary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🔤 COMPONENT PROPS TYPE
  // ========================
  {
    name: 'React FC Type',
    scope: ['entity.name.type.fc.tsx', 'support.type.primitive.tsx'],
    settings: {
      foreground: reactAccent,
    },
  },

  // ========================
  // 🎨 STYLE PROPS
  // ========================
  {
    name: 'JSX Style Prop',
    scope: ['meta.attribute.style.jsx'],
    settings: {
      foreground: reactSecondary,
      fontStyle: 'italic',
    },
  },
]
