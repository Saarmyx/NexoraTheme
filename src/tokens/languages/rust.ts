/**
 * Rust Syntax Tokens
 * Focuses on Rust-specific constructs: traits, lifetimes, macros
 *
 * Color Theme: Rust Orange (#CE4D1A)
 * Identity: Systems-focused, safe, performant
 */

import { TokenRule } from '../../types/theme'

const rustPrimary = '#CE4D1A' // Rust orange
const rustSecondary = '#E5622E' // Light rust
const rustAccent = '#A23F1A' // Dark rust

export const rustTokens = (): TokenRule[] => [
  // ========================
  // 🔑 KEYWORDS
  // ========================
  {
    name: 'Rust Keywords',
    scope: ['keyword.control.rust', 'storage.type.rust'],
    settings: {
      foreground: rustPrimary,
    },
  },

  // ========================
  // 🏗️ TRAITS & TYPES
  // ========================
  {
    name: 'Rust Trait',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: rustSecondary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'Rust Type',
    scope: ['entity.name.type.rust'],
    settings: {
      foreground: rustAccent,
    },
  },

  // ========================
  // ⚙️ FUNCTIONS & METHODS
  // ========================
  {
    name: 'Rust Function',
    scope: ['entity.name.function.rust'],
    settings: {
      foreground: rustAccent,
    },
  },

  // ========================
  // 🔤 LIFETIMES
  // ========================
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust'],
    settings: {
      foreground: rustSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📦 MACROS
  // ========================
  {
    name: 'Rust Macro',
    scope: ['entity.name.function.macro.rust'],
    settings: {
      foreground: rustPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'Rust Macro Call',
    scope: ['meta.macro.rust'],
    settings: {
      foreground: rustPrimary,
    },
  },

  // ========================
  // 🎯 ATTRIBUTES
  // ========================
  {
    name: 'Rust Attribute',
    scope: ['meta.attribute.rust'],
    settings: {
      foreground: rustAccent,
      fontStyle: 'italic',
    },
  },

  // ========================
  // ⚠️ UNSAFE
  // ========================
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: '#FF6B6B', // Highlight unsafe code
      fontStyle: 'bold',
    },
  },
]
