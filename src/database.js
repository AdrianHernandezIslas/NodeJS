const mssql = require('mssql');
var config = require('../config');

const db = mssql.connect(config.db,(err) => {
    if(err){
        throw err;
    }
    console.log('Conexion Establecida Correctamente con la BD');
});

module.exports = db;