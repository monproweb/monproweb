const fs = require('fs')
const http = require('http')
const https = require('https')
const path = require('path')
const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')

const app = express()

const privateKey = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/cert.pem', 'utf8')
const ca = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/chain.pem', 'utf8')

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

//  apply to all requests
app.use(limiter)

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'script-src': ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com/gtm.js?GTM-TFLZQ7R', 'https://static.axept.io/sdk.js', 'anchor.com']
    }
  })
)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443')
})
