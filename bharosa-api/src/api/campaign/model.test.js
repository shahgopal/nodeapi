import { Campaign } from '.'
import { User } from '../user'

let user, campaign

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  campaign = await Campaign.create({ createdBy: user, name: 'test', goal: 'test', reason: 'test', details: 'test', image: 'test', video: 'test', created: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = campaign.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaign.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.name).toBe(campaign.name)
    expect(view.goal).toBe(campaign.goal)
    expect(view.reason).toBe(campaign.reason)
    expect(view.details).toBe(campaign.details)
    expect(view.image).toBe(campaign.image)
    expect(view.video).toBe(campaign.video)
    expect(view.created).toBe(campaign.created)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = campaign.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(campaign.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.name).toBe(campaign.name)
    expect(view.goal).toBe(campaign.goal)
    expect(view.reason).toBe(campaign.reason)
    expect(view.details).toBe(campaign.details)
    expect(view.image).toBe(campaign.image)
    expect(view.video).toBe(campaign.video)
    expect(view.created).toBe(campaign.created)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
