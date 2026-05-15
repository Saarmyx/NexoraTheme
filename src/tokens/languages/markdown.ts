/**
 * Markdown Syntax Tokens
 * Focuses on formatting, links, code blocks, and document structure
 *
 * Color Theme: Vibrant Pink (#E879F9)
 * Identity: Content-focused, readable, expressive
 */

import { TokenRule } from '../../types/theme'

const mdPrimary = '#E879F9' // Vibrant pink
const mdSecondary = '#F0A8FF' // Light pink
const mdAccent = '#D946EF' // Dark pink

export const markdownTokens = (): TokenRule[] => [
  // ========================
  // 🔤 HEADINGS
  // ========================
  {
    name: 'Markdown Heading',
    scope: ['markup.heading.markdown'],
    settings: {
      foreground: mdPrimary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'Markdown Heading Punctuation',
    scope: ['punctuation.definition.heading.markdown'],
    settings: {
      foreground: mdAccent,
    },
  },

  // ========================
  // 📝 EMPHASIS
  // ========================
  {
    name: 'Markdown Bold',
    scope: ['markup.bold.markdown'],
    settings: {
      foreground: mdSecondary,
      fontStyle: 'bold',
    },
  },

  {
    name: 'Markdown Italic',
    scope: ['markup.italic.markdown'],
    settings: {
      foreground: mdSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🔗 LINKS & IMAGES
  // ========================
  {
    name: 'Markdown Link',
    scope: ['markup.underline.link.markdown'],
    settings: {
      foreground: mdAccent,
      fontStyle: 'underline',
    },
  },

  {
    name: 'Markdown Link Text',
    scope: ['string.other.link.markdown'],
    settings: {
      foreground: mdPrimary,
    },
  },

  {
    name: 'Markdown Image',
    scope: ['image.markdown'],
    settings: {
      foreground: mdSecondary,
    },
  },

  // ========================
  // 📦 CODE
  // ========================
  {
    name: 'Markdown Inline Code',
    scope: ['markup.inline.raw.string.markdown'],
    settings: {
      foreground: '#F0B35A', // Warm yellow
      fontStyle: 'italic',
    },
  },

  {
    name: 'Markdown Code Block',
    scope: ['markup.raw.block.markdown'],
    settings: {
      foreground: '#A3BE8C', // Neutral green
    },
  },

  {
    name: 'Markdown Fenced Code Language',
    scope: ['fenced_code.block.language.markdown'],
    settings: {
      foreground: mdAccent,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 📋 LISTS
  // ========================
  {
    name: 'Markdown List Marker',
    scope: ['markup.list.unnumbered.markdown', 'markup.list.numbered.markdown'],
    settings: {
      foreground: mdPrimary,
    },
  },

  // ========================
  // 🎯 BLOCKQUOTE
  // ========================
  {
    name: 'Markdown Blockquote',
    scope: ['markup.quote.markdown'],
    settings: {
      foreground: mdSecondary,
      fontStyle: 'italic',
    },
  },

  // ========================
  // 🏷️ TABLES
  // ========================
  {
    name: 'Markdown Table',
    scope: ['markup.table.markdown'],
    settings: {
      foreground: mdAccent,
    },
  },

  // ========================
  // 💬 FRONTMATTER
  // ========================
  {
    name: 'Markdown YAML Frontmatter',
    scope: ['meta.frontmatter.markdown'],
    settings: {
      foreground: mdSecondary,
    },
  },
]
