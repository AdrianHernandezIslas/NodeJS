const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors());

//Configuraciones
app.set('port',process.env.PORT || 3000);
 
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

//Rutas
app.use('/api/rutas',require('./routes/rutas'));
 
const server = app.listen(app.get('port'),() =>{
    console.log('Server Corriendo '+app.get('port'));
});

module.exports = server;