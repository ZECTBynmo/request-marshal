const test = require('tape')
const Server = require('../src/server')
const request = require('supertest')

test('server requests', async (test) => {
  const server = new Server()

  const res = await request(server.app)
    .get('/request')
    .expect(200)

  test.equal(true, true, 'should request without error')
  test.equal(res.ok, true, 'should respond correctly')

  await server.close()
  test.end()
})