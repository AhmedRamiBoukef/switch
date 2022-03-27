const express = require('express')
const router = require('./api/routers');
const mongoose = require('mongoose');
const _ = require('lodash');
const cors = require('cors');
const Switch = require('./models/switch');

const dbURI = 'mongodb://0.0.0.0:27017/switch'

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

app.get('/', (req ,res) => {
    const sw = new Switch({
        Bloc:"SCBP",
        Armoire:"Armoire",
        Nom:"data1",
        Marque:"Cisco",
        Modèle:"5",
        N_Serie: "dzdadza",
        Adresse_IP:"192.168.1.1",
        N_d_inventaire:"DKJZNKJDNA",
        Adresse_MAC:"1.1.1.1",
        Nombre_de_ports_F_E: _.random(100),
        Nombre_de_ports_G_E: _.random(100),
        Nombre_de_ports_SFP: _.random(100),
        Etat: true
    }) 
    sw.save()
    // res.redirect('/')
    console.log(_.random(10));
})
