import path from 'path'
import dotenv from 'dotenv-safe'

dotenv.config({
    path: path.join(__dirname, '.env'),
    sample: path.join(__dirname, '.env.example'),
})

export default {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
}