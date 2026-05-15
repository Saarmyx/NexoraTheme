# Nexora Theme

> **Premium minimalist VS Code theme** with modular multi-accent support
>
> _Crafted for developers who value clarity, consistency, and beauty_

<div align="center">

![VS Code](https://img.shields.io/static/v1?label=VS%20Code&message=1.85.0%2B&color=007ACC&logo=visual-studio-code)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8%2B-blue?logo=typescript)

</div>

## ✨ Features

- 🎨 **5 Premium Accent Colors**: Red, Blue, Green, Purple, Orange
- 🧱 **Unified Color System**: All colors centralized for consistency
- ⚡ **Zero Bloat**: No unnecessary dependencies or complexity
- 🔧 **Extensible**: Add new accent colors in minutes
- 📐 **Type Safe**: 100% strict TypeScript
- ✅ **Validated**: Automatic theme validation on build
- 🚀 **Developer First**: Clean architecture, easy to maintain

## 🎯 Why Nexora?

Nexora was built with **three core principles**:

1. **Minimalism**: Beautiful doesn't mean cluttered. Every color has a purpose.
2. **Consistency**: One palette system = zero color conflicts across themes.
3. **Professionalism**: Premium quality that works for teams and enterprises.

Perfect for:

- Long coding sessions (comfortable on the eyes)
- Teams wanting consistent branding
- Developers who appreciate elegant code architecture
- Anyone tired of themes that feel amateur

## 📦 Installation

Install from VS Code Extensions Marketplace:

1. Open VS Code
2. Press `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows/Linux)
3. Search for **"Nexora Theme"**
4. Click Install

Then select your preferred accent:

- File → Preferences → Color Theme
- Search for "Nexora"
- Choose your favorite

## 🎨 Variants

| Variant           | Description              | Best For                          |
| ----------------- | ------------------------ | --------------------------------- |
| **Nexora Red**    | Bold, dynamic energy     | Decision makers, fast-paced work  |
| **Nexora Blue**   | Cool, focused clarity    | Deep work, concentration          |
| **Nexora Green**  | Fresh productivity vibes | Long sessions, sustainable pace   |
| **Nexora Purple** | Creative inspiration     | Design, innovation, brainstorming |
| **Nexora Orange** | Warm, inviting energy    | Team collaboration, mentoring     |

## 🛠️ Development

### Setup

```bash
git clone https://github.com/saarmyx/nexora-theme
cd nexora-theme
npm install
```

### Build All Themes

```bash
npm run build
```

Generates optimized theme files in `dist/`

### Add a New Accent Color

```bash
npm run add-theme cyan "#00D9FF" "#00B8D4"
```

Then update `src/config/themes.ts` and rebuild.

### Project Structure

```
src/
├── tokens/          # Color system & definitions
├── generator/       # Theme builders
├── config/          # Central registry
├── types/           # TypeScript definitions
├── utils/           # Utilities & validation
└── build.ts         # Build entry point
```

**For detailed architecture**, see [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📋 Scripts

```bash
npm run build       # Generate all themes
npm run validate    # Check theme validity
npm run clean       # Remove generated files
npm run add-theme   # Create new accent variant
```

## 🏗️ Architecture Highlights

### Single Source of Truth

All colors defined in **`src/tokens/palette.ts`**. Update once → all themes update automatically.

### Type Safety

100% strict TypeScript with comprehensive theme definitions and validation.

### Modular System

- **Palette** → Base colors (neutral, semantic, syntax)
- **Base Colors** → UI component colors (consistent across variants)
- **Syntax Tokens** → Code highlighting rules
- **Theme Generator** → Combines above + accent colors
- **Registry** → Central theme metadata

### Quality Assurance

Automatic validation ensures:

- ✅ Valid hex colors
- ✅ Essential colors present
- ✅ Proper VS Code API compliance
- ✅ No missing required fields

## 🎓 Learning from Nexora

This project is structured as a **professional-grade VS Code extension** template. Study it to learn:

- ✅ Modular TypeScript architecture
- ✅ Scalable design systems
- ✅ Type-safe color management
- ✅ Build automation best practices
- ✅ Clean code principles
- ✅ Semantic versioning

## 📝 Customization

### Modify Base Colors

Edit `src/tokens/palette.ts`:

```typescript
neutral: {
  darkest: '#0A0B0D',  // Change editor background
  lighter: '#8B92A1',  // Change secondary text
  // ... more colors
}
```

### Customize Syntax Highlighting

Edit `src/tokens/syntaxTokens.ts` to change how code is colored.

All themes inherit your changes automatically.

### Add New Semantic Colors

The system supports error, warning, success, and info colors. Extend as needed.

## 🐛 Troubleshooting

**Theme not showing up?**

- Rebuild: `npm run build`
- Reload VS Code: `Cmd+R` (Mac) or `Ctrl+R` (Windows/Linux)

**Colors look wrong?**

- Run validation: `npm run validate`
- Check hex format in palette (must be `#RRGGBB`)

**Build fails?**

- Ensure Node.js 16+ is installed
- Run `npm install` again
- Check TypeScript: `npx tsc --noEmit`

## 🚀 Contributing

Contributions are welcome! Areas of interest:

- [ ] Light theme variant
- [ ] Additional accent colors
- [ ] Semantic token improvements
- [ ] Documentation
- [ ] Bug reports and feedback

## 📄 License

MIT © 2024 saarmyx

---

## 🙏 Appreciation

Built with care for developers who value quality, consistency, and beauty in their tools.

**Questions?** Open an issue or visit the [Architecture Guide](./ARCHITECTURE.md).
