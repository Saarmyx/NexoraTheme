import { createTheme } from './generator/createTheme'
import { themeRegistry } from './config/themes'
import { writeTheme } from './utils/writetheme'

/**
 * Build script
 * Generates all theme variants and writes them to dist/
 *
 * Each theme inherits the base colors and only customizes accent colors
 */

const main = async () => {
  try {
    console.log('🎨 Building Nexora themes...\n')

    let successCount = 0
    let errorCount = 0

    for (const themeConfig of themeRegistry) {
      try {
        const filename = `nexora-${themeConfig.id}-color-theme.json`
        const themeDefinition = createTheme(themeConfig.label, themeConfig.accent)

        writeTheme(filename, themeDefinition)
        console.log(`✅ ${themeConfig.label} → ${filename}`)

        successCount++
      } catch (error) {
        console.error(
          `❌ Failed to build ${themeConfig.label}:`,
          error instanceof Error ? error.message : String(error),
        )
        errorCount++
      }
    }

    console.log(`\n📊 Build complete: ${successCount} ✅ | ${errorCount} ❌`)

    if (errorCount > 0) {
      process.exit(1)
    }
  } catch (error) {
    console.error('💥 Build failed:', error)
    process.exit(1)
  }
}

main()
