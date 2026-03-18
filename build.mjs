// esbuild build script for Vercel deployment
// Bundles src/vercel-handler.ts (+ all imports including src/index.tsx) into api/index.js
import { build } from 'esbuild'

await build({
  entryPoints: ['src/vercel-handler.ts'],
  bundle: true,
  outfile: 'api/index.js',
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  jsx: 'automatic',
  jsxImportSource: 'hono/jsx',
  external: ['node:http', 'node:stream', 'node:buffer', 'node:url'],
  logLevel: 'info',
})
