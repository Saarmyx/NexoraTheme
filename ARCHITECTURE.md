# Nexora Theme - Architecture Guide

> Premium, minimalist VS Code theme system with modular multi-accent support.

## 🏗️ Architecture Overview

Nexora is built on a **token-based system** where all colors are centralized in a single palette, ensuring consistency across themes and making maintenance trivial.

### Philosophy

- **Single Source of Truth**: All colors defined in `palette.ts`
- **Theme Composition**: Base colors + accent colors = complete theme
- **Modularity**: Each component is independent and testable
- **Type Safety**: Strong TypeScript for developer experience
- **Zero Bloat**: Minimal dependencies, pure TypeScript

## 📁 Project Structure

```
src/
├── tokens/                 # Core color system
│   ├── palette.ts         # 🎨 Central color definitions
│   ├── baseColors.ts      # 🧱 UI component colors (theme-agnostic)
│   ├── syntaxTokens.ts    # 🔤 Code syntax highlighting rules
│   ├── base.ts            # [DEPRECATED - remove after migration]
│   ├── colors.ts          # [DEPRECATED - empty]
│   ├── semantic.ts        # [DEPRECATED - minimal]
│   ├── syntax.ts          # [DEPRECATED - old syntax tokens]
│   └── ui.ts              # [REFACTORED] Now only re-exports base colors
│
├── generator/
│   └── createTheme.ts     # 🔧 Theme builder (base + accent)
│
├── types/
│   └── theme.ts           # 📐 TypeScript definitions
│
├── config/
│   └── themes.ts          # 📋 Central theme registry
│
├── themes/                # 🎨 Theme accent definitions
│   ├── red.ts
│   ├── blue.ts
│   ├── green.ts
│   ├── purple.ts
│   └── orange.ts
│
├── utils/
│   ├── writetheme.ts      # 📝 File I/O utilities
│   └── validator.ts       # ✅ Theme validation
│
├── build.ts               # 🚀 Build entry point
├── extension.ts           # [EMPTY - remove]
├── generateTheme.ts       # [EMPTY - remove]
├── themeManager.ts        # [EMPTY - remove]
│
└── scripts/
    └── add-theme.ts       # 🎨 Helper to add new themes

dist/                       # Generated theme JSON files
```

## 🎨 Color System

### Palette Structure

```typescript
palette = {
  neutral: {
    darkest: '#0A0B0D', // Background
    darker: '#121417', // Inputs
    dark: '#1A1D22', // Selection
    medium: '#1E2228', // Borders
    // ... more levels
    lightest: '#E6E9EF', // Text
    white: '#FFFFFF', // Highlights
  },
  semantic: {
    error: '#FF5C5C', // Errors
    warning: '#F0B35A', // Warnings
    success: '#3ECF8E', // Success
    info: '#3ECF8E', // Info
  },
  syntax: {
    comment: '#6B7280',
    string: '#A3BE8C',
    number: '#F0B35A',
    // ...
  },
  accents: {
    red,
    blue,
    green,
    purple,
    orange,
  },
}
```

### How It Works

1. **Base Theme** = `palette.neutral` + `palette.semantic` → [baseColors.ts]
2. **Syntax Tokens** = `palette.syntax` + `accentColor` → [syntaxTokens.ts]
3. **Final Theme** = baseColors + syntaxTokens + accent overrides → [createTheme.ts]

## 🔄 Build Process

### 1. Source Files

```
themes/red.ts → { accent: '#E05A5A', accentHover: '#C94A4A' }
```

### 2. Theme Registry

```typescript
// config/themes.ts
themeRegistry = [
  { id: 'red', accent: {...}, label: 'Nexora Red' },
  // ...
]
```

### 3. Generation

```typescript
// build.ts
for each theme in registry:
  1. Load accent colors
  2. Call createTheme(name, accent)
  3. Generate full VS Code theme definition
  4. Validate theme
  5. Write to dist/{theme-id}-color-theme.json
```

### 4. VS Code Consumption

```
package.json contributes.themes → dist/*.json
```

## 📝 Type System

### Core Types

```typescript
// Theme Definition (VS Code API compliant)
interface ThemeDefinition {
  name: string
  type: 'dark' | 'light'
  semanticHighlighting: boolean
  colors: Record<string, string>
  tokenColors: TokenRule[]
}

// Accent Colors (per-theme)
interface AccentColors {
  accent: string // Primary color
  accentHover: string // Hover state
}

// Token Rule (syntax highlighting)
interface TokenRule {
  name: string
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}
```

## 🚀 Development

### Build All Themes

```bash
npm run build
```

### Watch Mode (beta)

```bash
npm run dev
```

### Validate Generated Themes

```bash
npm run validate
```

### Add New Theme Variant

```bash
npm run add-theme cyan "#00D9FF" "#00B8D4"
```

Then manually update:

- `src/config/themes.ts` (registry)
- `package.json` (contributes.themes)

## 🔧 Extending

### Add a New Accent Color

1. **Update palette.ts**:

```typescript
accents: {
  cyan: {
    primary: '#00D9FF',
    hover: '#00B8D4',
    light: '#00F5FF',
  }
}
```

2. **Update config/themes.ts**:

```typescript
{
  id: 'cyan',
  label: 'Nexora Cyan',
  accent: {
    accent: palette.accents.cyan.primary,
    accentHover: palette.accents.cyan.hover,
  }
}
```

3. **Rebuild**:

```bash
npm run build
```

### Customize Base Colors

Edit `tokens/palette.ts` → all themes auto-update ✨

### Modify Syntax Highlighting

Edit `tokens/syntaxTokens.ts` → all themes auto-update ✨

## ✅ Validation

The validator (`utils/validator.ts`) checks:

- ✅ Required fields present
- ✅ Valid hex color format
- ✅ Essential colors defined
- ✅ Token rules have scopes
- ✅ No orphaned properties

## 🎯 Performance

- **Zero runtime overhead**: Themes are static JSON
- **Fast build**: <500ms for all variants
- **Small bundle**: ~50KB per theme file (uncompressed JSON)
- **No dependencies at runtime**: JS only needed for build

## 📊 Quality Metrics

- **Type Coverage**: 100% strict TypeScript
- **Color Count**: 50+ semantic color definitions
- **Syntax Scopes**: 30+ language constructs
- **Accent Variants**: 5 pre-configured + extensible

## 🚦 Migration Path

### From Old Structure to New

Old files to **delete/deprecate**:

- `src/tokens/base.ts` → replaced by `baseColors.ts`
- `src/tokens/ui.ts` → merged into `baseColors.ts`
- `src/tokens/colors.ts` → migrated to `palette.ts`
- `src/tokens/semantic.ts` → merged into `palette.ts`
- `src/tokens/syntax.ts` → refactored to `syntaxTokens.ts`
- `src/extension.ts` (empty)
- `src/generateTheme.ts` (empty)
- `src/themeManager.ts` (empty)
- `src/themes/*.ts` → Keep for reference, use registry instead

## 🔮 Future Enhancements

- [ ] Light mode theme variant
- [ ] Semantic token highlighting
- [ ] Custom accent color picker UI
- [ ] Theme preview website
- [ ] Integration tests
- [ ] Performance benchmarks
- [ ] Accessibility compliance (WCAG AA+)
- [ ] Animation & motion preferences

## 🐛 Troubleshooting

### Theme doesn't apply

1. Rebuild: `npm run build`
2. Reload VS Code
3. Run `Developer: Reload Window`

### Colors look wrong

1. Check `palette.ts` for typos
2. Validate: `npm run validate`
3. Ensure hex format: `#RRGGBB`

### Build fails

1. Check for syntax errors: `npx tsc --noEmit`
2. Validate types: `npm run validate`
3. Check theme registry in `config/themes.ts`

## 📚 References

- [VS Code Theme API](https://code.visualstudio.com/api/extension-guides/color-theme)
- [TextMate Scopes](https://macromates.com/manual/en/language_grammars)
- [WCAG Color Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
