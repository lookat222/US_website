import app from '../src/index'
import { handle } from 'hono/vercel'

// Node.js serverless (Edge는 hono/jsx 미지원)
export default handle(app)
