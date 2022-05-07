const server = require('../src/index')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('User Endpoints', () => {
  it('GET /users should show all users', async () => {
    const res = await requestWithSupertest.get('/users')
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining('json'))
    expect(res.body).toHaveProperty('users')
  })
})
