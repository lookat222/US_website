// vercel-handler is the entrypoint for Vercel Node.js serverless function
// built by: node build.mjs  →  dist/api/index.js
import type { IncomingMessage, ServerResponse } from 'node:http'
import app from './index'

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const host = req.headers.host ?? 'localhost'
  const url = new URL(req.url ?? '/', `http://${host}`)

  const request = new Request(url.toString(), {
    method: req.method ?? 'GET',
    headers: req.headers as Record<string, string>,
  })

  const response = await app.fetch(request)

  res.statusCode = response.status
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })

  const body = await response.text()
  res.end(body)
}
