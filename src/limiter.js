const level = require('level')

class Limiter {
  constructor() {
    this.db = level('./limitdb')
  }

  async close() {
    return new Promise(async (resolve) => {
      this.db.close(() => {
        resolve()
      })
    })
  }
}

module.exports = Limiter