import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Paytmrequest, { schema } from './model'
import * as PaytmService from  '../../services/paytm/index'

const router = new Router()
const { REQUEST_TYPE, MID, ORDER_ID, TXN_AMOUNT, CHANNEL_ID, INDUSTRY_TYPE_ID, WEBSITE, CHECKSUMHASH, MOBILE_NO, EMAIL } = schema.tree

/**
 * @api {post} /paytmrequests Create paytmrequest
 * @apiName CreatePaytmrequest
 * @apiGroup Paytmrequest
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam REQUEST_TYPE Paytmrequest's REQUEST_TYPE.
 * @apiParam MID Paytmrequest's MID.
 * @apiParam ORDER_ID Paytmrequest's ORDER_ID.
 * @apiParam TXN_AMOUNT Paytmrequest's TXN_AMOUNT.
 * @apiParam CHANNEL_ID Paytmrequest's CHANNEL_ID.
 * @apiParam INDUSTRY_TYPE_ID Paytmrequest's INDUSTRY_TYPE_ID.
 * @apiParam WEBSITE Paytmrequest's WEBSITE.
 * @apiParam CHECKSUMHASH Paytmrequest's CHECKSUMHASH.
 * @apiParam MOBILE_NO Paytmrequest's MOBILE_NO.
 * @apiParam EMAIL Paytmrequest's EMAIL.
 * @apiSuccess {Object} paytmrequest Paytmrequest's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Paytmrequest not found.
 * @apiError 401 user access only.
 */
router.post('/',
  // token({ required: false }),
  // body({ CUST_ID, CALLBACK_URL, ORDER_ID, TXN_AMOUNT, MOBILE_NO, EMAIL }),
  (req, res) => {
    PaytmService.postTransaction(req, res)
  },
  create)

/**
 * @api {get} /paytmrequests Retrieve paytmrequests
 * @apiName RetrievePaytmrequests
 * @apiGroup Paytmrequest
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} paytmrequests List of paytmrequests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /paytmrequests/:id Retrieve paytmrequest
 * @apiName RetrievePaytmrequest
 * @apiGroup Paytmrequest
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} paytmrequest Paytmrequest's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Paytmrequest not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /paytmrequests/:id Update paytmrequest
 * @apiName UpdatePaytmrequest
 * @apiGroup Paytmrequest
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam REQUEST_TYPE Paytmrequest's REQUEST_TYPE.
 * @apiParam MID Paytmrequest's MID.
 * @apiParam ORDER_ID Paytmrequest's ORDER_ID.
 * @apiParam TXN_AMOUNT Paytmrequest's TXN_AMOUNT.
 * @apiParam CHANNEL_ID Paytmrequest's CHANNEL_ID.
 * @apiParam INDUSTRY_TYPE_ID Paytmrequest's INDUSTRY_TYPE_ID.
 * @apiParam WEBSITE Paytmrequest's WEBSITE.
 * @apiParam CHECKSUMHASH Paytmrequest's CHECKSUMHASH.
 * @apiParam MOBILE_NO Paytmrequest's MOBILE_NO.
 * @apiParam EMAIL Paytmrequest's EMAIL.
 * @apiSuccess {Object} paytmrequest Paytmrequest's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Paytmrequest not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ REQUEST_TYPE, MID, ORDER_ID, TXN_AMOUNT, CHANNEL_ID, INDUSTRY_TYPE_ID, WEBSITE, CHECKSUMHASH, MOBILE_NO, EMAIL }),
  update)

/**
 * @api {delete} /paytmrequests/:id Delete paytmrequest
 * @apiName DeletePaytmrequest
 * @apiGroup Paytmrequest
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Paytmrequest not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
