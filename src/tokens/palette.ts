/**
 * Nexora Palette System
 * Core color definitions for all UI components
 * This is the single source of truth for Nexora colors
 */

export const palette = {
  // ========================
  // 🎨 NEUTRALS
  // ========================
  neutral: {
    darkest: '#0A0B0D', // editor.background
    darker: '#121417', // input.background
    dark: '#1A1D22', // selection
    medium: '#1E2228', // borders
    mediumLight: '#2A2F38', // hover states
    light: '#6B7280', // muted text
    lighter: '#8B92A1', // secondary text
    lightest: '#E6E9EF', // primary text
    white: '#FFFFFF', // highlights
  },

  // ========================
  // 🎯 SEMANTIC
  // ========================
  semantic: {
    error: '#FF5C5C',
    warning: '#F0B35A',
    success: '#3ECF8E',
    info: '#3ECF8E',
  },

  // ========================
  // 📝 SYNTAX
  // ========================
  syntax: {
    comment: '#6B7280',
    string: '#A3BE8C',
    number: '#F0B35A',
    boolean: '#F0B35A',
    keyword: '#accent', // Will be replaced per theme
    function: '#accent', // Will be replaced per theme
    class: '#E8A55A',
    type: '#E8A55A',
    variable: '#E6E9EF',
  },

  // ========================
  // 🎨 ACCENT VARIATIONS
  // ========================
  accents: {
    red: {
      primary: '#E05A5A',
      hover: '#C94A4A',
      light: '#FF6B6B',
    },
    blue: {
      primary: '#3B82F6',
      hover: '#2563EB',
      light: '#60A5FA',
    },
    green: {
      primary: '#22C55E',
      hover: '#16A34A',
      light: '#4ADE80',
    },
    purple: {
      primary: '#8B5CF6',
      hover: '#7C3AED',
      light: '#A78BFA',
    },
    orange: {
      primary: '#F97316',
      hover: '#EA580C',
      light: '#FB923C',
    },
  },
} as const

export type PaletteNeutral = typeof palette.neutral
export type PaletteSemantic = typeof palette.semantic
export type PaletteSyntax = typeof palette.syntax
export type AccentName = keyof typeof palette.accents
export type AccentVariation = typeof palette.accents.red
