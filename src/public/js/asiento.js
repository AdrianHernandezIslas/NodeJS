var asiento = (function (){
    var _create = (nAsientos,padre,funcion) => {
        for (let index = 0; index <nAsientos; index++) {
            var asiento = _newAsiento(index,funcion);
            padre.appendChild(asiento);
            
        }
    };

    var _newAsiento = (id,funcion) => {
        var img = document.createElement('img');
        img.setAttribute('src','img/seat.png');
        img.setAttribute('id',id);
        var btn = document.createElement('button');
        btn.setAttribute('id','btn-'+id);
        btn.appendChild(img);
        btn.addEventListener('click',funcion);
        return btn;
    };
    
    return {
        create:_create
    };
})();