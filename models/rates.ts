import {Schema,model,models} from 'mongoose'
const rateSchema= new Schema({
    lovedIt:Number,
    improveIt:Number,
    notBad:Number,
    lastRate:String,
    visitors:Number,
    lastVisit:String
  })
 
let rate = models.rateObj || model('rateObj',rateSchema)

export default rate;