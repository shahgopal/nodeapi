import mongoose, { Schema } from 'mongoose'

const paytmrequestSchema = new Schema({
  CAMPAIGN_ID: {
    type: Schema.ObjectId,
    ref: 'Campaign',
    required: true
  },
  CUST_ID: {
    type: String
  },
  REQUEST_TYPE: {
    type: String
  },
  MID: {
    type: String
  },
  ORDER_ID: {
    type: String
  },
  TXN_AMOUNT: {
    type: String
  },
  CHANNEL_ID: {
    type: String
  },
  INDUSTRY_TYPE_ID: {
    type: String
  },
  WEBSITE: {
    type: String
  },
  CHECKSUMHASH: {
    type: String
  },
  MOBILE_NO: {
    type: String
  },
  EMAIL: {
    type: String
  }
}, {
  timestamps: true
})

paytmrequestSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      CAMPAIGN_ID: this.CAMPAIGN_ID.view(full),
      REQUEST_TYPE: this.REQUEST_TYPE,
      MID: this.MID,
      ORDER_ID: this.ORDER_ID,
      TXN_AMOUNT: this.TXN_AMOUNT,
      CHANNEL_ID: this.CHANNEL_ID,
      INDUSTRY_TYPE_ID: this.INDUSTRY_TYPE_ID,
      WEBSITE: this.WEBSITE,
      CHECKSUMHASH: this.CHECKSUMHASH,
      MOBILE_NO: this.MOBILE_NO,
      EMAIL: this.EMAIL,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Paytmrequest', paytmrequestSchema)

export const schema = model.schema
export default model
