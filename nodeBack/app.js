const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./api');
const cors=require('cors')
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const connectionParams = {
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('the connected is sucsses');
    })
    .catch((err) => {
        console.log('error:' + err);
    })

app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(5000, () => {
    console.log('listen to the project!');
})