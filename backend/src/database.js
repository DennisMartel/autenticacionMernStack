const mongoose = require('mongoose')

const URI = process.env.MONGO_URI
    ? process.env.MONGO_URI
    : 'mongodb://localhost/auth'

mongoose.connect(URI, ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}))

mongoose.connection.on('open', () => {
    console.log('database connected successfully')
})