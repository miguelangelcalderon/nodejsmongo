var mysql=require("mysql");

var conexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"inmobiliaria"
});

conexion.connect(); // Nos conectamos a la Base de datos

exports.insertar=function(req,res) {
   
   var promocion={
       cod_promocion:req.body.cod_promocion,
       nombre:req.body.nombre,
       descripcion:req.body.descripcion,
       foto:req.body.foto,
       Direccion:req.body.Direccion,
       localidad:req.body.localidad,
       cod_provincia:req.body.cod_provincia
   };
   console.log("Insertando una nueva promocion:");
   console.log(promocion);
   conexion.query("INSERT INTO promociones SET ?",promocion,function(error) {
   console.log(error);
       if (error) { 
                    res.status(200).send("KO");
                    throw error;
                
                  };
        res.status(200).send("OK");
       //res.send("Nueva promocion insertada");
   });
   
};


exports.getPromociones=function(req,res) {
    conexion.query("SELECT * FROM promociones ORDER BY nombre",function(error,datos) {
        if (error) { 
                    res.status(200).send("KO");
                    throw error;
                
                  };
        res.status(200).send(datos);
    });
    
};
exports.getPromocion=function(req,res) {
    
    var cod_promocion=req.params.id;
    conexion.query("SELECT * FROM promociones WHERE cod_promocion=?",cod_promocion,function(error,datos) {
        if (error) { 
                    res.status(200).send("KO");
                    throw error;
                
                  };
        res.status(200).send(datos);
    });
    
    
};

exports.actualizar=function(req,res) {
    var promocion={
       nombre:req.body.nombre,
       descripcion:req.body.descripcion,
       foto:req.body.foto,
       Direccion:req.body.Direccion,
       localidad:req.body.localidad,
       cod_provincia:req.body.cod_provincia
   };
    var codigo=req.params.id;
    console.log("Actualizando una promocion con codigo: "+codigo);
    console.log(promocion);
    conexion.query("UPDATE promociones SET ? WHERE cod_promocion=?",[promocion,codigo],function(error) {
        if (error) { 
                    res.status(200).send("KO");
                    throw error;
                
                  };
        res.status(200).send("OK");
     });
};

exports.delete=function(req,res) {
 var cod_promocion=req.params.id;
    conexion.query("DELETE FROM promociones WHERE cod_promocion=?",cod_promocion,function(error) {
        if (error) { 
                    res.status(200).send("KO");
                    throw error;
                
                  };
        res.status(200).send("OK");
    });

};




