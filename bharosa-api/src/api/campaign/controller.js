import _ from 'lodash'
import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Campaign } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Campaign.create({ ...body, createdBy: user })
    .then((campaign) => campaign.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Campaign.find(query, select, cursor)
    .populate('createdBy')
    .then((campaigns) => campaigns.map((campaign) => campaign.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Campaign.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then((campaign) => campaign ? campaign.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Campaign.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((campaign) => campaign ? _.merge(campaign, body).save() : null)
    .then((campaign) => campaign ? campaign.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Campaign.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((campaign) => campaign ? campaign.remove() : null)
    .then(success(res, 204))
    .catch(next)
