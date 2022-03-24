const express = require('express')
const router = require('./api/routers');
const mongoose = require('mongoose');
const _ = require('lodash');
const cors = require('cors')

const dbURI = 'mongodb://localhost:27017/switch'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected')
        app.listen(process.env.PORT || 3000)
    })
    .catch(err => console.log(err));

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api',router)

app.get('/', (req ,res) => {

    console.log(_.random(10));
})
