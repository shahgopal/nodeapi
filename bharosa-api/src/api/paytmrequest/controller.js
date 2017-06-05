import _ from 'lodash'
import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Paytmrequest } from '.'

export const create = ({ campaign, bodymen: { body } }, res, next) =>
  Paytmrequest.create({ ...body, CAMPAIGN_ID: campaign })
    .then((paytmrequest) => paytmrequest.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Paytmrequest.find(query, select, cursor)
    .populate('CAMPAIGN_ID')
    .then((paytmrequests) => paytmrequests.map((paytmrequest) => paytmrequest.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Paytmrequest.findById(params.id)
    .populate('CAMPAIGN_ID')
    .then(notFound(res))
    .then((paytmrequest) => paytmrequest ? paytmrequest.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ campaign, bodymen: { body }, params }, res, next) =>
  Paytmrequest.findById(params.id)
    .populate('CAMPAIGN_ID')
    .then(notFound(res))
    .then(authorOrAdmin(res, campaign, 'CAMPAIGN_ID'))
    .then((paytmrequest) => paytmrequest ? _.merge(paytmrequest, body).save() : null)
    .then((paytmrequest) => paytmrequest ? paytmrequest.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ campaign, params }, res, next) =>
  Paytmrequest.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, campaign, 'CAMPAIGN_ID'))
    .then((paytmrequest) => paytmrequest ? paytmrequest.remove() : null)
    .then(success(res, 204))
    .catch(next)
