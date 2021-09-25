import mongoose from 'mongoose'
import vars from './vars'

const { mongo_uri } = vars

const connect = () => {
    mongoose.connect(mongo_uri)
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
}

export default {
    connect,
};