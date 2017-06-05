import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Paytmrequest } from '.'

const app = () => express(routes)

let userSession, anotherSession, paytmrequest

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  paytmrequest = await Paytmrequest.create({ CUST_ID: user })
})

test('POST /paytmrequests 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, REQUEST_TYPE: 'test', MID: 'test', ORDER_ID: 'test', TXN_AMOUNT: 'test', CHANNEL_ID: 'test', INDUSTRY_TYPE_ID: 'test', WEBSITE: 'test', CHECKSUMHASH: 'test', MOBILE_NO: 'test', EMAIL: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.REQUEST_TYPE).toEqual('test')
  expect(body.MID).toEqual('test')
  expect(body.ORDER_ID).toEqual('test')
  expect(body.TXN_AMOUNT).toEqual('test')
  expect(body.CHANNEL_ID).toEqual('test')
  expect(body.INDUSTRY_TYPE_ID).toEqual('test')
  expect(body.WEBSITE).toEqual('test')
  expect(body.CHECKSUMHASH).toEqual('test')
  expect(body.MOBILE_NO).toEqual('test')
  expect(body.EMAIL).toEqual('test')
  expect(typeof body.CUST_ID).toEqual('object')
})

test('POST /paytmrequests 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /paytmrequests 200 (user)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].CUST_ID).toEqual('object')
})

test('GET /paytmrequests 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /paytmrequests/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`/${paytmrequest.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paytmrequest.id)
  expect(typeof body.CUST_ID).toEqual('object')
})

test('GET /paytmrequests/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${paytmrequest.id}`)
  expect(status).toBe(401)
})

test('GET /paytmrequests/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /paytmrequests/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${paytmrequest.id}`)
    .send({ access_token: userSession, REQUEST_TYPE: 'test', MID: 'test', ORDER_ID: 'test', TXN_AMOUNT: 'test', CHANNEL_ID: 'test', INDUSTRY_TYPE_ID: 'test', WEBSITE: 'test', CHECKSUMHASH: 'test', MOBILE_NO: 'test', EMAIL: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(paytmrequest.id)
  expect(body.REQUEST_TYPE).toEqual('test')
  expect(body.MID).toEqual('test')
  expect(body.ORDER_ID).toEqual('test')
  expect(body.TXN_AMOUNT).toEqual('test')
  expect(body.CHANNEL_ID).toEqual('test')
  expect(body.INDUSTRY_TYPE_ID).toEqual('test')
  expect(body.WEBSITE).toEqual('test')
  expect(body.CHECKSUMHASH).toEqual('test')
  expect(body.MOBILE_NO).toEqual('test')
  expect(body.EMAIL).toEqual('test')
  expect(typeof body.CUST_ID).toEqual('object')
})

test('PUT /paytmrequests/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`/${paytmrequest.id}`)
    .send({ access_token: anotherSession, REQUEST_TYPE: 'test', MID: 'test', ORDER_ID: 'test', TXN_AMOUNT: 'test', CHANNEL_ID: 'test', INDUSTRY_TYPE_ID: 'test', WEBSITE: 'test', CHECKSUMHASH: 'test', MOBILE_NO: 'test', EMAIL: 'test' })
  expect(status).toBe(401)
})

test('PUT /paytmrequests/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${paytmrequest.id}`)
  expect(status).toBe(401)
})

test('PUT /paytmrequests/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: anotherSession, REQUEST_TYPE: 'test', MID: 'test', ORDER_ID: 'test', TXN_AMOUNT: 'test', CHANNEL_ID: 'test', INDUSTRY_TYPE_ID: 'test', WEBSITE: 'test', CHECKSUMHASH: 'test', MOBILE_NO: 'test', EMAIL: 'test' })
  expect(status).toBe(404)
})

test('DELETE /paytmrequests/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${paytmrequest.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /paytmrequests/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`/${paytmrequest.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /paytmrequests/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${paytmrequest.id}`)
  expect(status).toBe(401)
})

test('DELETE /paytmrequests/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
