const express = require('express');
const morgan = require('morgan');
const dotenv= require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');



const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');
const profileRoute = require('./routes/api/profile');
const postRoute = require('./routes/api/posts');



const app = express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({extended : false}))
dotenv.config({path : './config/config.env'})



connectDB();


app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/profile',profileRoute)
app.use('/api/posts',postRoute)


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT ,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));

const io = require('./socket').init(server)
io.on('connection' , socket => {
    console.log('Client Connected')
})  