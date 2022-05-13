const express = require('express');
const router = express.Router();
const { requireAuth, checkUser, isAdmin,isGestionnaire } = require('../middleware/authMiddleware');
const switchController = require('../controllers/switchController');
const { append } = require('express/lib/response');

router.get('*', requireAuth);
router.post('*', requireAuth);
router.put('*', requireAuth);

router.get('/switch', switchController.switch_get)

router.get('/ports', switchController.ports_get)

router.get('/port', switchController.port_get)

router.post('/search', switchController.search)

router.post('/getbyid', switchController.getbyid)

router.get('/search/port', switchController.search_port)


router.put('*', isGestionnaire);

router.post('/importe', switchController.importer)

//modification dans la base de donnnée (switch)
router.get('/modifier',switchController.modifier_get)

router.get('/marque',switchController.marque)

router.put('/modifier',switchController.modifier_put)

router.put('/modifierPort', switchController.modifierport)

// cofigurer or ajouter



router.post('/postport', switchController.postport)

router.post('/postswitch', switchController.postswitch)





module.exports = router;
