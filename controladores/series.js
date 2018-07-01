//file:controladores/series.js

var mongoose=require("mongoose");
var SerieTV=mongoose.model('SerieTV');
// POST insertamos una nueva serie utilizando el ORM SerieTV en la BBDD Mongo
exports.insertar=function(req,res) {
    console.log("Hago POST");
    console.log("Contenido del cuerpo de la peticion"+req.body);
    // Cargamos el ORM con los datos de la peticion JSON
    var serieTV=new SerieTV({
        titulo:req.body.titulo,
        ano:req.body.ano,
        poster:req.body.poster,
        descripcion:req.body.descripcion,
        temporada:req.body.temporada,
        genero:req.body.genero
    });
    // GUARDAMOS en la BBDD de mongo, es decir hacemos el INSERT
    serieTV.save(function(err,datos) {
        if (err) return res.status(500).send(err.message);
        res.status(200).send("Serie insertada en Mongo");
    });
};


exports.getSeries=function(req,res) {
    
    SerieTV.find(function(err,datos) {
        if (err) res.send(500,err.message);
        res.status(200).json(datos);
        
    });
};
exports.getSerie=function(req,res) {
    
    SerieTV.findOne(req.param.id,function(err,datos) {
        if (err) res.send(500,err.message);
        res.status(200).json(datos);
       
    });
    
};

exports.actualizar=function(req,res) {
    // Cargamos el ORM con los datos de la peticion JSON
    SerieTV.findOne(req.param.id, function(err,dato) {
        dato.titulo=req.body.titulo,
        dato.ano=req.body.ano,
        dato.poster=req.body.poster,
        dato.descripcion=req.body.descripcion,
        dato.temporada=req.body.temporada,
        dato.genero=req.body.genero;
        dato.save(function(err){
            if (err) {res.send(500).send(err.message);}
            res.status(200).json(dato);    
        });
    });
};

exports.delete=function(req,res) {
     SerieTV.findOne(req.param.id, function(err,dato) {
        dato.remove(function(err) {
              if (err) {res.send(500).send(err.message);}
              res.status(200).send("Serie borrada");    
        }); 
     });
};

    
    


