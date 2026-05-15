import { palette } from './palette'

/**
 * Base color definitions for all UI components
 * These colors are consistent across all theme variants
 * Only accent colors are changed per variant
 */
export const baseColors = {
  // ========================
  // 🧱 EDITOR
  // ========================
  'editor.background': palette.neutral.darkest,
  'editor.foreground': palette.neutral.lightest,
  'editor.lineHighlightBackground': palette.neutral.darker,

  // ========================
  // 🎯 CURSOR & SELECTION
  // ========================
  'editor.selectionBackground': palette.neutral.dark,
  'editor.selectionHighlightBackground': palette.neutral.darker,

  // ========================
  // 📏 INDENT GUIDES
  // ========================
  'editorIndentGuide.background1': palette.neutral.medium,
  'editorIndentGuide.background2': palette.neutral.medium,
  'editorIndentGuide.background3': palette.neutral.medium,
  'editorIndentGuide.background4': palette.neutral.medium,
  'editorIndentGuide.background5': palette.neutral.medium,
  'editorIndentGuide.background6': palette.neutral.medium,
  'editorIndentGuide.activeBackground1': palette.neutral.mediumLight,
  'editorIndentGuide.activeBackground2': palette.neutral.mediumLight,
  'editorIndentGuide.activeBackground3': palette.neutral.mediumLight,
  'editorIndentGuide.activeBackground4': palette.neutral.mediumLight,
  'editorIndentGuide.activeBackground5': palette.neutral.mediumLight,
  'editorIndentGuide.activeBackground6': palette.neutral.mediumLight,

  // ========================
  // 📁 SIDEBAR
  // ========================
  'sideBar.background': palette.neutral.darkest,
  'sideBar.foreground': palette.neutral.lighter,
  'sideBar.border': palette.neutral.medium,

  'tree.indentGuidesStroke': palette.neutral.medium,

  // ========================
  // 🧭 ACTIVITY BAR
  // ========================
  'activityBar.background': palette.neutral.darkest,
  'activityBar.border': palette.neutral.medium,
  'activityBar.inactiveForeground': palette.neutral.light,

  // ========================
  // 📋 LISTS & SELECTIONS
  // ========================
  'list.activeSelectionBackground': palette.neutral.darker,
  'list.activeSelectionForeground': palette.neutral.white,
  'list.inactiveSelectionBackground': palette.neutral.darkest,
  'list.hoverBackground': palette.neutral.darkest,
  'list.inactiveSelectionForeground': palette.neutral.lighter,

  'list.focusBackground': palette.neutral.darker,
  'list.focusForeground': palette.neutral.white,

  // ========================
  // 🔴 STATUS BAR (BOTTOM)
  // ========================
  'statusBar.foreground': palette.neutral.darkest,
  'statusBar.noFolderBackground': palette.neutral.darkest,
  'statusBar.border': palette.neutral.medium,

  // ========================
  // 🧠 TITLE BAR
  // ========================
  'titleBar.activeBackground': palette.neutral.darkest,
  'titleBar.activeForeground': palette.neutral.lightest,
  'titleBar.inactiveBackground': palette.neutral.darkest,
  'titleBar.inactiveForeground': palette.neutral.lightest,
  'titleBar.border': palette.neutral.medium,

  // ========================
  // 📑 TABS
  // ========================
  'tab.activeBackground': palette.neutral.darkest,
  'tab.inactiveBackground': palette.neutral.darkest,
  'tab.activeForeground': palette.neutral.lightest,
  'tab.inactiveForeground': palette.neutral.light,
  'tab.border': palette.neutral.medium,

  // ========================
  // 📦 PANELS
  // ========================
  'panel.background': palette.neutral.darkest,
  'panel.border': palette.neutral.medium,

  // ========================
  // 📜 SCROLLBAR
  // ========================
  'scrollbarSlider.background': palette.neutral.medium,
  'scrollbarSlider.hoverBackground': palette.neutral.mediumLight,

  // ========================
  // ⚠️ DIAGNOSTICS
  // ========================
  'editorError.foreground': palette.semantic.error,
  'editorWarning.foreground': palette.semantic.warning,
  'editorInfo.foreground': palette.semantic.info,

  // ========================
  // 🔘 BUTTONS
  // ========================
  'button.foreground': palette.neutral.darkest,

  'button.secondaryBackground': palette.neutral.medium,
  'button.secondaryForeground': palette.neutral.lightest,
  'button.secondaryHoverBackground': palette.neutral.mediumLight,

  'button.border': palette.neutral.medium,

  // ========================
  // ⌨️ INPUTS & DROPDOWNS
  // ========================
  'input.background': palette.neutral.darker,
  'input.foreground': palette.neutral.lightest,
  'input.border': palette.neutral.medium,
  'input.placeholderForeground': palette.neutral.light,

  'dropdown.background': palette.neutral.darker,
  'dropdown.foreground': palette.neutral.lightest,
  'dropdown.border': palette.neutral.medium,

  // ========================
  // ☑️ CHECKBOX
  // ========================
  'checkbox.background': palette.neutral.darker,
  'checkbox.border': palette.neutral.medium,

  // ========================
  // ⚡ QUICK INPUT (CMD PALETTE)
  // ========================
  'quickInput.background': palette.neutral.darkest,
  'quickInput.foreground': palette.neutral.lightest,

  'quickInputList.focusBackground': palette.neutral.darker,
  'quickInputList.focusForeground': palette.neutral.white,

  // ========================
  // 🔗 LINKS & BADGES
  // ========================
  'textLink.activeForeground': palette.neutral.darkest,

  'badge.foreground': palette.neutral.darkest,

  // ========================
  // 💬 HOVER
  // ========================
  'editorHoverWidget.background': palette.neutral.darker,
  'editorHoverWidget.border': palette.neutral.medium,

  // ========================
  // 🎨 MINIMAP & GUTTER
  // ========================
  'editorGutter.background': palette.neutral.darkest,
  'editorGutter.modifiedBackground': palette.semantic.warning,
  'editorGutter.addedBackground': palette.semantic.success,
  'editorGutter.deletedBackground': palette.semantic.error,

  // ========================
  // 🔎 SEARCH & REPLACE
  // ========================
  'editor.findMatchBackground': palette.neutral.mediumLight,
  'editor.findMatchHighlightBackground': palette.neutral.medium,

  // ========================
  // 📍 MARKERS
  // ========================
  'editorMarkerNavigationError.background': palette.semantic.error,
  'editorMarkerNavigationWarning.background': palette.semantic.warning,
  'editorMarkerNavigationInfo.background': palette.semantic.info,

  // ========================
  // 💡 LIGHTBULB
  // ========================
  'editorLightBulb.foreground': palette.semantic.warning,
} as const
