(() => {
    const socket = io();
    let contenedor = document.getElementById('contenedor');
    var asientosSelec = [];

    asiento.create(10,contenedor, (event) => { 
        var id = event.target.id;
        disableBtn(id);
        almacenaSeleccion(id);
        socket.emit('mensaje',{btn:id});//emitir unmensaje
    });
    
    const almacenaSeleccion = (_idAsiento) => {
        asientosSelec.push({btn:_idAsiento});
        localStorage.setItem('dbAsientos',JSON.stringify(asientosSelec));
    };
    
    const asientosEnDB = (db) => {
        asientosSelec = db;
        for (let index = 0; index < asientosSelec.length; index++) {   
            document.getElementById('btn-'+asientosSelec[index].btn).disabled = true;
        }
    };
    
    const disableBtn = (id_btn) =>{
        btn = document.getElementById('btn-'+id_btn);
        btn.disabled = true;
        btn.style.backgroundColor = "orange";
    };
    
    //recibir eventos
    socket.on('responseServer',(data) => {
        disableBtn(data.btn);
    });
    
    socket.on('dbAsientos',(data) => {
        JSON.parse(data).forEach(element => {
            disableBtn(element.btn);
        });
    });

    (()=>{
        let dbAsientos = localStorage.getItem('dbAsientos');
        if(dbAsientos !== null){
            asientosEnDB(JSON.parse(dbAsientos));
            socket.emit('dbAsientos',dbAsientos);
        }
        
    })();
    
    (()=>{
        let $contador = document.getElementById('contador');
        var tiempo = 120;
        const time = setInterval(function() {
            tiempo--;
            $contador.innerHTML = tiempo; 
            if(tiempo === 0){
                localStorage.clear();
                clearInterval(time);
            }   
        }, 1000);
    })();
})();


