const test = require('tape')
const Limiter = require('../src/limiter')

test('registration', async (test) => {
  const limiter = new Limiter()

  const opts = {
    unit: 'hour',
    limit: 500,
    interval: 1
  }

  await limiter.register('test1', opts)

  const registered = await limiter.get('test1')

  test.equal(registered.unit, 'hour', 'should get the right data back')

  limiter.close()

  test.end()
})
