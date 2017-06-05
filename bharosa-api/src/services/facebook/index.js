import request from 'request-promise'
const crypto = require('crypto');



export const getUser = (accessToken) =>


  request({
    uri: 'https://graph.facebook.com/me',
    json: true,
    qs: {
      access_token: accessToken,
      fields: 'id, name, email, picture',
      appsecret_proof:crypto.createHmac('sha256', "c4371a1a11f965b85c1b47f3519c3fea").update(accessToken).digest('hex')
    }
  }).then(({ id, name, email, picture }) => ({
    service: 'facebook',
    picture: picture.data.url,
    id,
    name,
    email
  }))
