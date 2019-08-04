 const router = require('express').Router();
 const controllerRutas = require('../controllers/controllerRutas');
 
 router.get('/:origen&:destino&:fecha',controllerRutas.getRutas);
 router.get('/origenes',controllerRutas.getOrigenes);
 router.get('/destinos/:origen',controllerRutas.getDestinos);



 module.exports = router;