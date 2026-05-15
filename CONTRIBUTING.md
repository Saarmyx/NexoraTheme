# Contributing to Nexora Theme

Thank you for your interest in improving Nexora Theme! This guide will help you understand the project structure and make meaningful contributions.

## 🎯 Before You Start

- Read [ARCHITECTURE.md](./ARCHITECTURE.md) - Understand how the project works
- Check [CHANGELOG.md](./CHANGELOG.md) - See what's been done
- Run `npm run build` - Ensure your environment works

## 🚀 Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/nexora-theme.git
cd nexora-theme
npm install
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

```bash
npm run build  # Test your changes
npm run validate  # Verify theme validity
```

## 📋 Types of Contributions

### 1. Adding a New Accent Color

**Most Common Contribution** ✅

```bash
# Step 1: Create new accent
npm run add-theme cyan "#00D9FF" "#00B8D4"

# Step 2: Update src/config/themes.ts (follow existing pattern)

# Step 3: Add to package.json contributes.themes

# Step 4: Rebuild
npm run build

# Step 5: Verify visually in VS Code
```

### 2. Improving Base Colors

Edit `src/tokens/palette.ts`:

```typescript
neutral: {
  darkest: '#0A0B0D',  // ← Edit here
  // ... rest of palette
}
```

**All themes automatically inherit the change!** 🎉

### 3. Enhancing Syntax Highlighting

Edit `src/tokens/syntaxTokens.ts`:

```typescript
{
  name: 'Your Language Feature',
  scope: ['scope.to.target'],
  settings: {
    foreground: accentColor,  // Uses theme's accent
    fontStyle: 'italic'
  }
}
```

### 4. Fixing Bugs

- Describe the issue clearly
- Link to related issues
- Provide before/after examples
- Include test results

### 5. Documentation

- Improve README.md or ARCHITECTURE.md
- Fix typos
- Add examples
- Clarify unclear sections

## 🧪 Testing Your Changes

### Validate Themes

```bash
npm run validate
```

### Check Build Output

```bash
npm run build
```

Expected output:

```
🎨 Building Nexora themes...
✅ Nexora X → nexora-x-color-theme.json
...
📊 Build complete: X ✅ | 0 ❌
```

### Test in VS Code

1. Open this repo in VS Code
2. Press `F5` to launch Debug
3. New VS Code window opens with the theme
4. Select your theme: File → Preferences → Color Theme
5. Verify colors look correct

### Check TypeScript

```bash
npx tsc --noEmit
```

## ✅ Code Quality Standards

### TypeScript

- ✅ Strict mode enabled
- ✅ No `any` types
- ✅ Comprehensive types
- ✅ Self-documenting code

### Colors

- ✅ Valid hex format: `#RRGGBB`
- ✅ Consistent naming
- ✅ Semantic organization
- ✅ Accessibility considered

### Files

- ✅ Clear naming
- ✅ Single responsibility
- ✅ Proper exports
- ✅ JSDoc comments

### Example (Good)

```typescript
/**
 * Creates a theme definition from accent colors
 * @param name - Display name for the theme
 * @param accent - Accent color configuration
 * @returns Complete VS Code theme definition
 */
export const createTheme = (name: string, accent: AccentColors): ThemeDefinition => {
  // Implementation
}
```

## 📝 Commit Messages

Use descriptive, concise commits:

```
✅ Add cyan accent color

- Define cyan in palette.ts
- Register in config/themes.ts
- Update package.json contributions
- Validate all 6 themes build correctly

Closes #123
```

**Format**: `[emoji] Title\n\nDetails\n\nCloses #issue`

### Common Emojis

- ✅ Feature/improvement
- 🐛 Bug fix
- 📝 Documentation
- ♻️ Refactoring
- 🎨 Style/colors
- ⚡ Performance
- 🧪 Tests

## 🔄 Pull Request Process

1. **Create PR** with clear title and description
2. **Link issues** - "Closes #123"
3. **Add context** - Why this change?
4. **Include testing** - How did you verify?
5. **Update docs** - Did anything change architecturally?

### PR Template

```markdown
## Description

Brief summary of changes

## Type

- [ ] New accent color
- [ ] Base color improvement
- [ ] Syntax highlighting fix
- [ ] Documentation
- [ ] Bug fix
- [ ] Other: \_\_\_

## Changes

- Changed X
- Fixed Y
- Improved Z

## Testing

- Built successfully ✅
- Validated themes ✅
- Tested in VS Code ✅
- No breaking changes ✅

## Screenshots (if visual)

[Before/After if color changes]
```

## 🚫 What Not to Do

❌ Don't add dependencies without discussion
❌ Don't make the build slower
❌ Don't break existing themes
❌ Don't hardcode colors outside palette.ts
❌ Don't commit dist/ files (auto-generated)
❌ Don't add unrelated features

## 💡 Ideas for Contributions

### Easy (Start Here)

- [ ] Add new accent color (just colors)
- [ ] Fix typos in documentation
- [ ] Improve README examples
- [ ] Add color contrast ratios

### Medium

- [ ] Enhance syntax highlighting for language X
- [ ] Add semantic token categories
- [ ] Improve error messages
- [ ] Add validation rules

### Advanced

- [ ] Light theme variant
- [ ] Web-based preview tool
- [ ] Theme customization API
- [ ] CI/CD integration
- [ ] Marketplace automation

## 📚 Resources

- [VS Code Theme API](https://code.visualstudio.com/api/extension-guides/color-theme)
- [TextMate Scopes](https://macromates.com/manual/en/language_grammars)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [Color Theory](https://www.interaction-design.org/literature/article/color-theory)

## 🤝 Community

- Ask questions in Issues
- Share ideas in Discussions
- Report bugs with details
- Be respectful and constructive

## 📄 License

By contributing, you agree that your contributions are licensed under the MIT License.

---

**Thank you for making Nexora better!** 🙏

Questions? Open an issue or reach out to the maintainers.
