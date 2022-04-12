const express = require('express')
const router = require('./api/routers');
const mongoose = require('mongoose');
const _ = require('lodash');
const cors = require('cors');
const Switch = require('./models/switch');
const Port = require('./models/port');

const dbURI = 'mongodb://localhost:27017/data'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected')
        app.listen(process.env.PORT || 5000)
    })
    .catch(err => console.log(err));

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',router)

app.get('/add', (req ,res) => {
    const sw = new Port({
        "nm_port":1,
        "nom_switch":"Bibliothèque",
        "ip_vlan":"10.0.1.1",
        "type":"wifi",
        "cscade":false,
        "Cascades_vers_depuis":" ",
        "EtatDePort": "Active",
        "Entree":true,
        "Cable":"F_E",
        "prise":"Bibliothèque"
        }) 
    sw.save()
    // res.redirect('/')
    console.log(_.random(10));
})

app.set('view-engine','ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')

})

app.post('/getData', async (req, res) => {
    let payload = req.body.payload.trim()
    let search = await Switch.find({Nom:{$regex: new RegExp('^'+payload+'.*','i')}}).exec()
    search = search.slice(0,10)
    res.send({payload:search})
    res.end()
})