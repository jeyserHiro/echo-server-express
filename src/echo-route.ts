import { Router, Request, Response } from 'express'
import * as prettyjson from 'prettyjson'

const router = Router()

const RESET_TOKEN = '\x1b[0m'
const UNDERSCORE_TOKEN = '\x1b[4m'

const logSection = (name: string, payload: any) => {
  if (!payload || !Object.keys(payload)?.length) return ''
  return `\n\n• ${name}:
${prettyjson.render(payload)}`
}

const logRequest = (req: Request) => {
  console.log(`\n\n🆕 NEW ${UNDERSCORE_TOKEN}${req.method.toLocaleUpperCase()}${RESET_TOKEN} REQUEST 🆕
    
• Path: ${req.path}
• Full Url: ${req.url}${logSection('Headers', req.headers)}${logSection(
    'Query',
    req.query,
  )}${logSection('Payload', req.body)}
`)
}

;[
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'copy',
  'head',
  'options',
  'purge',
  'lock',
  'unlock',
  'propfind',
].forEach((method) => {
  router[method]('/*', (req: Request, res: Response) => {
    logRequest(req)
    let payload = {
      request: {
        headers: req.headers,
        protocol: req.protocol,
        body: req.body,
        params: req.params, //no chance
        query: req.query,
        host: req.hostname,
        path: req.path,
        originalUrl: req.originalUrl,
        subdomains: req.subdomains,
      },
      success: true,
    }

    res.status(200).json(payload)
  })
})

export default router
