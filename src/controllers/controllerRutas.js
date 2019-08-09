var controllerRuta = () => {

    const ruta = require('../models/ruta');

    const _getRutas = (req, res) => { 
        ruta.getRutas(req,res); 
    };

    const _getOrigenes = (req, res)=>{
        ruta.getOrigenes(req, res);
    };

    

    const _getDestinos = (req, res) => { 
        ruta.getDestinos(req,res); 
    };

    return{
        getRutas: _getRutas,
        getOrigenes:_getOrigenes,
        getDestinos: _getDestinos
    }
};

module.exports = controllerRuta();