import {Schema, model} from 'mongoose'

const gamerSchema = new Schema({
    name: String,
    nickname: String,
    correo: String,
    edad: Number
})

export default {
    "gamer": gamerSchema,
}