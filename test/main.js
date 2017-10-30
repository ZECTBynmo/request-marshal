
if (process.argv[2] === '--debug' || process.argv[2] === 'debug') {
  process.env.DEBUG = process.argv[3] || 'hyper*'
}

require('./server')

process.on('unhandledRejection', (err) => {
  console.log("unhandledRejection", err)
})

process.on('unhandledException', (err) => {
  console.log("unhandledException", err)
})