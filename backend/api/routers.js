const express = require('express');
const router = express.Router();
const Port = require('../models/port');
const Switch = require('../models/switch');
const marque = require('../models/marque')
const { pickBy, identity } = require('lodash')
const _ = require('lodash')
const { redirect } = require('express/lib/response'); 


router.get('/marque',async ( req,res)=>{
    const data = await marque.find();
    console.log(data);
    res.send(data);
})




 //modification dans la base de donnnée (switch)
router.get('/modifier',async ( req,res)=>{
    const data = await Switch.findById(req.body._id);
    console.log(data);
    const dataport = await Port.find({nom_switch : data.Nom}).sort({"nm_port":1});
    res.json({
        switch : data , 
        port : dataport 
    });
     
})


router.put('/modifier', async (req ,res) => {
   const data = await Switch.findOne({"N_d_inventaire":req.body.N_d_inventaire})
   let nom = data.Nom
   const mod = await Switch.updateOne({_id:data._id},req.body)
   const p = await Port.updateMany({nom_switch:nom},{nom_switch:req.body.Nom})
   const dataport = await Port.find({nom_switch:req.body.Nom}).sort({"nm_port":1})
    
   res.send(dataport)
})

router.put('/modifierPort', async (req ,res) => {

    for (const ele in req.body) {
        const mod = await Port.updateOne({_id:ele._id},ele)
    }
    res.send("Success")
})

// cofigurer or ajouter



router.get('/switch', async (req, res) => {
    const data = await Switch.find()
    console.log(data);
    res.send(data)
})

router.get('/ports', async (req ,res) => {
    const data = await Port.find(req.body)
    res.send(data)
})

router.post('/postport', (req, res) => {
    const p = new Port(req.body)
    p.save()
    res.redirect('/api/switch')
})

router.post('/postswitch', (req, res) => {
    const s = new Switch(req.body)
    s.save()
    res.redirect('/api/ports')
})



router.get('/search', async (req, res) => {
    const dataSwitch = pickBy({
        Nom: req.body.Nom,
        Marque: req.body.Marque,
        Bloc: req.body.Bloc,
        Adresse_MAC: req.body.Adresse_MAC,
        N_d_inventaire: req.body.N_d_inventaire
    },identity)
    const dataPort = pickBy({
        ip_vlan: req.body.ip_vlan,
        prise: req.body.prise
    },identity)
    let resultSwitch = await Switch.find(dataSwitch)
    let resultPort = await Port.find(dataPort)
    let table = resultPort.map((ele) => ele.nom_switch)
    let table2 = resultSwitch.map((ele) => ele.Nom)
    if(Object.keys(dataPort).length && Object.keys(dataSwitch).length){
        let fin = await Switch.find( { Nom: { $in : _.intersection(table,table2) } } )
        res.send(fin)
    } else if (Object.keys(dataPort).length) {
        let fin = await Switch.find( { Nom: { $in : table } } )
        res.send(fin)

    } else {
        res.send(resultSwitch)
    }
})

router.get('/getbyid', async (req ,res) => {
    console.log(req.body);
    const elem = await Switch.findById(req.body._id)
    const ports = await Port.find({ nom_switch: elem.Nom })
    console.log(elem,ports);
    res.send({
        switch: elem,
        ports: ports
    })
})

router.get('/search/port', async (req ,res) => {
    let data
    if(typeof(req.body.id) ==="string") {
        data = await Port.find({
            $or: [
                {ip_vlan: req.body.id},
                {type: req.body.id},
                {Cascades_vers_depuis: req.body.id},
                {prise: req.body.id}
            ]
        })
    } else {
        data = await Port.find({
            $or: [
                {nm_port: req.body.id}
            ]
        })
    }
    res.send(data) 
})




module.exports = router;