/**
 * YAML / Configuration Format Tokens
 * Focuses on structure, keys, and values in YAML files
 *
 * Color Theme: Soft Green (#A3BE8C)
 * Identity: Configuration-focused, organized
 */

import { TokenRule } from '../../types/theme'

const yamlPrimary = '#A3BE8C' // Soft green
const yamlSecondary = '#B8D4A5' // Light green
const yamlAccent = '#8DB17F' // Dark green

export const yamlTokens = (): TokenRule[] => [
  // ========================
  // 🔑 KEYS
  // ========================
  {
    name: 'YAML Key',
    scope: ['meta.mapping.key', 'meta.mapping.key.string'],
    settings: {
      foreground: yamlAccent,
    },
  },

  // ========================
  // 💬 VALUES
  // ========================
  {
    name: 'YAML String Value',
    scope: ['meta.mapping.value', 'string.quoted.double.yaml'],
    settings: {
      foreground: '#A3BE8C',
    },
  },

  {
    name: 'YAML Number',
    scope: ['constant.numeric.yaml'],
    settings: {
      foreground: '#F0B35A',
    },
  },

  {
    name: 'YAML Boolean',
    scope: ['constant.language.yaml'],
    settings: {
      foreground: yamlPrimary,
    },
  },

  {
    name: 'YAML Null',
    scope: ['constant.language.null.yaml'],
    settings: {
      foreground: yamlAccent,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🏗️ ANCHORS & ALIASES
  // ========================
  {
    name: 'YAML Anchor',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: yamlPrimary,
      fontStyle: 'italic',
    },
  },

  {
    name: 'YAML Alias',
    scope: ['variable.other.yaml'],
    settings: {
      foreground: yamlSecondary,
    },
  },

  // ========================
  // 📋 TAGS
  // ========================
  {
    name: 'YAML Tag',
    scope: ['entity.tag.yaml'],
    settings: {
      foreground: yamlAccent,
    },
  },
]
