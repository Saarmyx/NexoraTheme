import fs from 'fs'
import path from 'path'

export const writeTheme = (fileName: string, content: unknown) => {
  const distPath = path.resolve('dist')

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath)
  }

  fs.writeFileSync(path.join(distPath, fileName), JSON.stringify(content, null, 2))
}
