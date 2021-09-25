import {Schema, model} from 'mongoose'

const sessionsSchema = new Schema({
    userId: String,
    prize: Number,
    rounds: Array
})

export default model('sessions', sessionsSchema)