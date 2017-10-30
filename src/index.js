const Server = require('./server')

class RequestMarshal {

  constructor(opts={}) {
    this.server = opts.server || new Server()
  }

  async run() {
    await this.server.listen()
  }

}

module.exports = RequestMarshal