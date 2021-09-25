import {Schema, model} from 'mongoose'

const sessionsSchema = new Schema({
    nickname: String,
    prize: Number,
    round: Object
})

export default model('sessions', sessionsSchema)