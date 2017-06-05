
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Campaign, { schema } from './model'

const router = new Router()
const { name, goal, reason, details, image, video, created } = schema.tree

/**
 * @api {post} /campaigns Create campaign
 * @apiName CreateCampaign
 * @apiGroup Campaign
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Campaign's name.
 * @apiParam goal Campaign's goal.
 * @apiParam reason Campaign's reason.
 * @apiParam details Campaign's details.
 * @apiParam image Campaign's image.
 * @apiParam video Campaign's video.
 * @apiParam created Campaign's created.
 * @apiSuccess {Object} campaign Campaign's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, goal, reason, details, image, video, created }),
  create)

/**
 * @api {get} /campaigns Retrieve campaigns
 * @apiName RetrieveCampaigns
 * @apiGroup Campaign
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} campaigns List of campaigns.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: false }),
  query(),
  index)

/**
 * @api {get} /campaigns/:id Retrieve campaign
 * @apiName RetrieveCampaign
 * @apiGroup Campaign
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} campaign Campaign's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /campaigns/:id Update campaign
 * @apiName UpdateCampaign
 * @apiGroup Campaign
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Campaign's name.
 * @apiParam goal Campaign's goal.
 * @apiParam reason Campaign's reason.
 * @apiParam details Campaign's details.
 * @apiParam image Campaign's image.
 * @apiParam video Campaign's video.
 * @apiParam created Campaign's created.
 * @apiSuccess {Object} campaign Campaign's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, goal, reason, details, image, video, created }),
  update)

/**
 * @api {delete} /campaigns/:id Delete campaign
 * @apiName DeleteCampaign
 * @apiGroup Campaign
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Campaign not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
