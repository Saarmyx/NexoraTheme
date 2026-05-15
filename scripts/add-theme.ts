#!/usr/bin/env node

/**
 * Helper script to add a new theme variant
 * Usage: npx ts-node scripts/add-theme.ts <name> <hex-primary> <hex-hover>
 *
 * Example: npx ts-node scripts/add-theme.ts cyan '#00D9FF' '#00B8D4'
 */

import fs from 'fs'
import path from 'path'

const [, , themeName, primaryHex, hoverHex] = process.argv

if (!themeName || !primaryHex || !hoverHex) {
  console.error('❌ Usage: ts-node scripts/add-theme.ts <name> <primary-hex> <hover-hex>')
  console.error('   Example: ts-node scripts/add-theme.ts cyan "#00D9FF" "#00B8D4"')
  process.exit(1)
}

// Validate hex colors
const hexRegex = /^#[0-9A-Fa-f]{6}$/
if (!hexRegex.test(primaryHex) || !hexRegex.test(hoverHex)) {
  console.error('❌ Invalid hex color format. Use #RRGGBB')
  process.exit(1)
}

const themeId = themeName.toLowerCase()
const themeLabel = themeName.charAt(0).toUpperCase() + themeName.slice(1)
const themePath = path.join(__dirname, '../src/themes', `${themeId}.ts`)

// Check if theme already exists
if (fs.existsSync(themePath)) {
  console.error(`❌ Theme "${themeId}" already exists at ${themePath}`)
  process.exit(1)
}

// Create theme file
const themeContent = `export const ${themeId} = {
  accent: '${primaryHex}',
  accentHover: '${hoverHex}',
}
`

try {
  fs.writeFileSync(themePath, themeContent)
  console.log(`✅ Created theme file: ${themePath}`)

  // Show next steps
  console.log(`\n📋 Next steps:`)
  console.log(`   1. Add to src/config/themes.ts themeRegistry:`)
  console.log(`      {`)
  console.log(`        id: '${themeId}',`)
  console.log(`        label: 'Nexora ${themeLabel}',`)
  console.log(`        description: 'Add theme description',`)
  console.log(`        accent: {`)
  console.log(`          accent: '${primaryHex}',`)
  console.log(`          accentHover: '${hoverHex}',`)
  console.log(`        },`)
  console.log(`      }`)
  console.log(`\n   2. Update package.json contributes.themes`)
  console.log(`   3. Run: npm run build`)
} catch (error) {
  console.error('❌ Failed to create theme file:', error)
  process.exit(1)
}
