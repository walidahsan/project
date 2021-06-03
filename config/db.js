const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://connector-dev:5iW8t1DAy1pIHiiR@cluster0.q7vm8.mongodb.net/dev-connector?retryWrites=true&w=majority' ,{
            useNewUrlParser : true ,
            useCreateIndex : true,
            useUnifiedTopology: true,
            useFindAndModify : false
        });
        
        console.log(`MongoDb Connected ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {

        console.log(`Error ${err.message}`.red)
        process.exit(1);
        
    }

}

module.exports = connectDB ;