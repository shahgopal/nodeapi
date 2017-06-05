import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Campaign } from '.'

const app = () => express(routes)

let userSession, anotherSession, campaign

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  campaign = await Campaign.create({ createdBy: user })
})

test('POST /campaigns 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, name: 'test', goal: 'test', reason: 'test', details: 'test', image: 'test', video: 'test', created: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.goal).toEqual('test')
  expect(body.reason).toEqual('test')
  expect(body.details).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.video).toEqual('test')
  expect(body.created).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('POST /campaigns 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /campaigns 200 (user)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].createdBy).toEqual('object')
})

test('GET /campaigns 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /campaigns/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`/${campaign.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaign.id)
  expect(typeof body.createdBy).toEqual('object')
})

test('GET /campaigns/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${campaign.id}`)
  expect(status).toBe(401)
})

test('GET /campaigns/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /campaigns/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${campaign.id}`)
    .send({ access_token: userSession, name: 'test', goal: 'test', reason: 'test', details: 'test', image: 'test', video: 'test', created: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(campaign.id)
  expect(body.name).toEqual('test')
  expect(body.goal).toEqual('test')
  expect(body.reason).toEqual('test')
  expect(body.details).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.video).toEqual('test')
  expect(body.created).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('PUT /campaigns/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`/${campaign.id}`)
    .send({ access_token: anotherSession, name: 'test', goal: 'test', reason: 'test', details: 'test', image: 'test', video: 'test', created: 'test' })
  expect(status).toBe(401)
})

test('PUT /campaigns/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${campaign.id}`)
  expect(status).toBe(401)
})

test('PUT /campaigns/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: anotherSession, name: 'test', goal: 'test', reason: 'test', details: 'test', image: 'test', video: 'test', created: 'test' })
  expect(status).toBe(404)
})

test('DELETE /campaigns/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${campaign.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /campaigns/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`/${campaign.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /campaigns/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${campaign.id}`)
  expect(status).toBe(401)
})

test('DELETE /campaigns/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
