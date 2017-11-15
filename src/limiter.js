const level = require('level')

class Limiter {
  constructor() {
    this.db = level('./limitdb')
  }

  async register(name, config) {
    return new Promise((resolve, reject) => {
      this.db.put(`limits:${name}`, JSON.stringify(config), (err) => {
        err ? reject(err) : resolve()
      })
    })
  }

  async get(name) {
    return new Promise((resolve, reject) => {
      this.db.get(`limits:${name}`, (err, results) => {
        err ? reject(err) : resolve(JSON.parse(results))
      })
    })
  }

  async close() {
    return new Promise(async (resolve, reject) => {
      this.db.close((err) => {
        err ? reject(err) : resolve()
      })
    })
  }
}

module.exports = Limiter