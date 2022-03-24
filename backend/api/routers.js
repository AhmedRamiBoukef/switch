const express = require('express');
const router = express.Router();
const Port = require('../models/port');
const Switch = require('../models/switch');
const _ = require('lodash');
const { redirect } = require('express/lib/response');


router.get('/', (req, res) => {
    const p = new Port({
        "nm_port":_.random(20),
        "nom_switch":"data1",
        "ip_vlan":"192.168.8.0",
        "type":true,
        "cscade":false,
        "Cascades_vers_depuis":"HMAD",
        "Entree":"true",
        "prise":_.random(20)
    });
    p.save()
    res.redirect('/api/')
})








module.exports = router;