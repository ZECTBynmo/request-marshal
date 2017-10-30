#!/usr/bin/env node

const debug = require('debug')

const RequestMarshal = require('../')

const argv = require('yargs')
  .usage('usage $0 <command> [options]')
  .command('transform', 'run transform daemon')
  .example('$0 start')
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright StackDown 2017')
  .argv

if (argv.debug) {
  console.log("DEBUG", argv.debug.constructor.name)
  process.env.DEBUG = argv.debug === true ? 'marshal*' : argv.debug
  console.log("ARG IS", process.env.DEBUG)
}

const [command, custId] = argv._

if (command === undefined) {
  console.log("For help, run 'marshal help' or 'marshal -h'")
  process.exit()
}

(async() => {
  switch(command) {

    case 'run': {
      const marshal = new RequestMarshal()
      await marshal.run()
      console.log("RUNNING")
      break
    }
  
  }

})()

process.on('unhandledRejection', (err) => {
  console.log("unhandledRejection", err)
})

process.on('unhandledException', (err) => {
  console.log("unhandledException", err)
})