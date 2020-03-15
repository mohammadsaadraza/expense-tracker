const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}
 module.exports= connectDB