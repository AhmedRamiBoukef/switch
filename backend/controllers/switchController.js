
const Port = require('../models/port');
const Switch = require('../models/switch');
const { pickBy, identity } = require('lodash')
const _ = require('lodash')
const marque = require('../models/marque')




module.exports.modifier_get = async ( req,res)=>{
    const data = await Switch.findById(req.body._id);
    console.log(data);
    const dataport = await Port.find({nom_switch : data.Nom}).sort({"nm_port":1});
    res.json({
        switch : data , 
        port : dataport 
    });
}

module.exports.marque = async ( req,res)=>{
    const data = await marque.find();
    console.log(data);
    res.send(data);
}


module.exports.modifier_put = async (req ,res) => {
    const data = await Switch.findOne({"N_d_inventaire":req.body.N_d_inventaire})
    let nom = data.Nom
   try {
    const mod = await Switch.updateOne({_id:data._id},req.body)
    const p = await Port.updateMany({nom_switch:nom},{nom_switch:req.body.Nom})
    const dataport = await Port.find({nom_switch:req.body.Nom}).sort({"nm_port":1}) 
    res.send(dataport)
   }
   catch(error)
   {
       if (error.code===11000)
       {
        res.status(404).json("ce Nom de Switch ("+error.keyValue.Nom+") existe deja")
       }
   }
 }

 module.exports.modifierport = async (req ,res) => {

    for (let i = 0;i<req.body.length;i++) {
        const mod = await Port.updateOne({_id:req.body[i]._id},req.body[i])
        console.log(req.body[i]);
    }
    res.json(true)
}

module.exports.switch_get = async (req, res) => {
    const data = await Switch.find()
    console.log(data);
    res.send(data)
}


module.exports.ports_get = async (req ,res) => {
    const data = await Port.find(req.body)
    res.send(data)
}

module.exports.port_get = async (req ,res) => {
    const data = await Port.find()
    res.send(data)
}

module.exports.postport = (req, res) => {
    const p = new Port(req.body)
    p.save()
    res.send(p)
}


module.exports.postswitch = async (req, res) => {
    try{
        const s = await Switch.create(req.body)
        res.send(s)
   }   
   catch (error) {
        if (error._message ==="Switch validation failed"){
            let type ;
           if(error.errors.Nom!=undefined) { type= error.errors.Nom.path }
           else if(error.errors.N_d_inventaire!=undefined) { type =error.errors.N_d_inventaire.path } 
            res.status(400).json('ce '+type+' de switch existe deja ');
        }
       
    } 
}


module.exports.search = async (req, res) => {
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
}


module.exports.getbyid = async (req ,res) => {
    console.log(req.body);
    const elem = await Switch.findById(req.body._id)
    const ports = await Port.find({ nom_switch: elem.Nom }).sort({"nm_port":1})
    console.log(elem,ports);
    res.send({
        switch: elem,
        ports: ports
    })
}

module.exports.search_port = async (req ,res) => {
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
}

module.exports.importer = (req,res)=>{
    const file = req.files.fichier ;
    const filename = file.name ;
    console.log(filename);
    file.mv('./upload/'+filename , (err)=>{
        if(err){
            res.send(err);
        }
        else
        {
            res.send('file upload');
            const result= exceltojson({
                sourceFile : './upload/'+filename ,
                header : {
                    rows : 3 ,
                },
               columnToKey: {
                    A: 'vide',
                    B: '{{B3}}',
                    C: '{{C3}}',
                    D: '{{D3}}',
                    E: '{{E3}}',
                    F: '{{F3}}',
                    G: '{{G3}}',
                    H: '{{H3}}',
                    I: '{{I3}}',
                    J: '{{J3}}',
                    K: '{{K3}}',
                    L: '{{L3}}',
                    M: '{{M3}}',
                    // N: '{{N3}}',
                    // O: '{{O3}}',
                    // P: '{{P3}}',
                    // Q: '{{Q3}}',
       
                },
                // la page est : Inventaire Switchs
            })
            console.log(result['Inventaire Switchs']);
            result['Inventaire Switchs'].map(ele => {
                console.log(ele);

                var s = new Switch({
                    Bloc:ele.Bloc,
                    Armoire:ele.Armoire,
                    Nom:ele.Nom,
                    Marque:ele.Marque,
                    Modèle:ele.Modèle,
                    N_Serie: ele['N° de Série'],
                    Adresse_IP:ele['Adresse IP'],
                    N_d_inventaire:ele["N° d'inventaire"],
                    Adresse_MAC:ele['Adresse MAC'],
                    Nombre_de_ports_F_E: ele['Nombre de ports F-E'],
                    Nombre_de_ports_G_E: ele['Nombre de ports G-E'],
                    Nombre_de_ports_SFP: ele['Nombre de ports SFP'],
                    Etat: false
                });
                s.save()
            })
        }
    });
   
 
}