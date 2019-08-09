const ruta = () => {
    const mssql = require('../database');

    const _getRutas = function(req,res){
        const sql = "select C.idCorrida,C.idPlanCorrida,C.FechaHoraSalida,costoNormal,lugares,vendidos,nombre,Origen,Destino "+
        "from corridas C INNER JOIN PlanCorrida P ON C.idPlanCorrida = P.idPlanCorrida "+
        "INNER JOIN localidades L ON L.id = P.idRuta "+
        "where C.status = 'c' and L.Origen = '"+req.params.origen+"' and L.Destino ='"+req.params.destino+"' and C.FechaHoraSalida >= '"+req.params.fecha+"' and C.FechaHoraSalida<DATEADD(day,1,'"+req.params.fecha+"')";
        
        mssql.query(sql,(err,recordset) => {
            if (err) {
                console.log('Error de Consulta: getRutas'+err);
            }else{
                res.json(recordset.recordset);
            }
            
        });
        
    };

    const _getOrigenes = function(req,res){
        /*mssql.query('select id,Origen from localidades',(err,recordset)=>{
            if (err) {
                console.log('Error de Consulta getOrigenes: '+err);
            }else{
                res.json(recordset.recordset);
            }
        });*/
        res.json([{id:1,Origen:'Oaxaca'},{id:2,Origen:'Huatulco'}]);
    };

    const _getDestinos = function(req,res){
        /*mssql.query("select id,Destino from localidades where Origen ='"+req.params.origen+"'",(err,recordset)=>{
            if (err) {
                console.log('Error de Consulta getDestinos: '+err);
            }else{
                res.json(recordset.recordset);
            }
        });*/
        res.json([{id:3,Origen:'Itsmo'},{id:4,Origen:'Cañada'}]);
    };
    



    return{
        getRutas:_getRutas,
        getOrigenes:_getOrigenes,
        getDestinos:_getDestinos
    }
};

module.exports = ruta();