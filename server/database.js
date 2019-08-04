const mssql = require('mssql');

/*const config = {
    user:'Node',
    password:'nodejs',
    server:'192.168.1.10',
    port: 1433,
    database:'nodejs'
};*/

const config = {
    user:'SA',
    password:'Ahi.290795',
    server:'127.0.0.1',
    port: 1433,
    database:'TestDB'
};

const db = mssql.connect((config,err) => {
    if(err){
        throw err;
    }
    console.log('Conexion Establecida Correctamente con la BD');
});

module.exports = db;