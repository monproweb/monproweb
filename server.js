const fs = require('fs')
const http = require('http')
const path = require('path')
const express = require('express')
const spdy = require('spdy')
const compression = require('compression')
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
  max: 100 // limit each IP to 200 requests per windowMs
})

//  apply to all requests
app.use(limiter)

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)

app.use(compression())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const httpServer = http.createServer(app)

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80')
})

spdy.createServer(credentials, app).listen(443, error => {
  if (error) {
    console.error(error)
    return process.exit(1)
  } else {
    console.log('Listening on port: 443')
  }
})
