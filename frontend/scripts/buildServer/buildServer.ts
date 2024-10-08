import path from 'node:path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'
import fs, { ensureDir, remove } from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function buildServer() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: [path.join(path.resolve(__dirname, '../../server/'), 'index.ts')],
    outfile: 'index.cjs',
    write: false,
    minify: true,
    platform: 'node',
    bundle: true,
    format: 'cjs',
    sourcemap: false,
    treeShaking: true,
    define: { 'import.meta.url': 'importMetaUrl', 'process.env.NODE_ENV': '"production"' },
    inject: [path.resolve(__dirname, './import.meta.url-polyfill.ts')],
    banner: {
      js: `/* eslint-disable prettier/prettier */`,
    },
    tsconfig: path.resolve(__dirname, './tsconfig.buildServer.json'),
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              return {
                external: true,
              }
            }
          })
        },
      },
    ],
  })
  const { text } = result.outputFiles[0]
  const filePath = path.join(path.resolve(__dirname, '../../build/'), 'index.cjs')
  if (fs.existsSync(filePath)) {
    await remove(filePath)
  }
  await ensureDir(path.dirname(filePath))
  await fs.writeFile(filePath, text)
}

void buildServer()
