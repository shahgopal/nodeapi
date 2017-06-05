import { Paytmrequest } from '.'
import { User } from '../campaign'

let user, paytmrequest

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  paytmrequest = await Paytmrequest.create({ CAMPAIGN_ID: campaign, REQUEST_TYPE: 'test', MID: 'test', ORDER_ID: 'test', TXN_AMOUNT: 'test', CHANNEL_ID: 'test', INDUSTRY_TYPE_ID: 'test', WEBSITE: 'test', CHECKSUMHASH: 'test', MOBILE_NO: 'test', EMAIL: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = paytmrequest.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paytmrequest.id)
    expect(typeof view.CAMPAIGN_ID).toBe('object')
    expect(view.CAMPAIGN_ID.id).toBe(user.id)
    expect(view.REQUEST_TYPE).toBe(paytmrequest.REQUEST_TYPE)
    expect(view.MID).toBe(paytmrequest.MID)
    expect(view.ORDER_ID).toBe(paytmrequest.ORDER_ID)
    expect(view.TXN_AMOUNT).toBe(paytmrequest.TXN_AMOUNT)
    expect(view.CHANNEL_ID).toBe(paytmrequest.CHANNEL_ID)
    expect(view.INDUSTRY_TYPE_ID).toBe(paytmrequest.INDUSTRY_TYPE_ID)
    expect(view.WEBSITE).toBe(paytmrequest.WEBSITE)
    expect(view.CHECKSUMHASH).toBe(paytmrequest.CHECKSUMHASH)
    expect(view.MOBILE_NO).toBe(paytmrequest.MOBILE_NO)
    expect(view.EMAIL).toBe(paytmrequest.EMAIL)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = paytmrequest.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(paytmrequest.id)
    expect(typeof view.CUST_ID).toBe('object')
    expect(view.CUST_ID.id).toBe(user.id)
    expect(view.REQUEST_TYPE).toBe(paytmrequest.REQUEST_TYPE)
    expect(view.MID).toBe(paytmrequest.MID)
    expect(view.ORDER_ID).toBe(paytmrequest.ORDER_ID)
    expect(view.TXN_AMOUNT).toBe(paytmrequest.TXN_AMOUNT)
    expect(view.CHANNEL_ID).toBe(paytmrequest.CHANNEL_ID)
    expect(view.INDUSTRY_TYPE_ID).toBe(paytmrequest.INDUSTRY_TYPE_ID)
    expect(view.WEBSITE).toBe(paytmrequest.WEBSITE)
    expect(view.CHECKSUMHASH).toBe(paytmrequest.CHECKSUMHASH)
    expect(view.MOBILE_NO).toBe(paytmrequest.MOBILE_NO)
    expect(view.EMAIL).toBe(paytmrequest.EMAIL)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
