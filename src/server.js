const debug = require('debug')
const express = require('express')
const Limiter = require('./limiter')
const bodyParser = require('body-parser')

class Server {
  constructor(opts={}) {
    this.app = express()
    this.log = opts.log || debug('marshal:server')
    this.port = opts.port || 4000
    this.limiter = opts.limiter || new Limiter()

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({
      extended: false
    }))

    this.setupRoutes()
  }

  setupRoutes() {
    this.app.get('/request', this.handleRequest)
  }

  async listen() {
    return new Promise((resolve, reject) => {
      this.app.listen(this.port, () => {
        this.log("Listening on", this.port)
        resolve()
      })
    })
  }

  handleRequest(req, res) {
    res.json({
      ok: true
    })
  }

  async close() {
    await this.limiter.close()
  }

}

module.exports = Server