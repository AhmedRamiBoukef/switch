const express = require('express');
const router = express.Router();
const { requireAuth, checkUser, isAdmin } = require('../middleware/authMiddleware');
const switchController = require('../controllers/switchController');

router.get('*', requireAuth);
router.post('*', requireAuth);
router.put('*', requireAuth);

 //modification dans la base de donnnée (switch)
router.get('/modifier',switchController.modifier_get)


router.get('/marque',switchController.marque)

router.put('/modifier',switchController.modifier_put)

router.put('/modifierPort', switchController.modifierport)

// cofigurer or ajouter

router.get('/switch', switchController.switch_get)

router.get('/ports', switchController.ports_get)

router.get('/port', switchController.port_get)

router.post('/postport', switchController.postport)

router.post('/postswitch', switchController.postswitch)

router.get('/search', switchController.search)

router.post('/getbyid', switchController.getbyid)

router.get('/search/port', switchController.search_port)




module.exports = router;