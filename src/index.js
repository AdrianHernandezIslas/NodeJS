const SocketIO = require('socket.io');//este
const server = require('./server');
const io = SocketIO(server);//este

io.on('connection',(socket) => {
    console.log('nueva conexion '+socket.id);//este
    
    socket.on('mensaje',(data) => {
        io.sockets.emit('responseServer',data);
    });

    socket.on('dbAsientos',(data) =>{
        io.sockets.emit('dbAsientos',data);
    });
});

