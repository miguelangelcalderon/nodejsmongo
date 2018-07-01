//file:modelos/series.js
var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var serieSchema= new Schema({
    
    titulo: {type:String},
    ano:{type:Number},
    poster:{type:String},
    descripcion:{type:String},
    temporada:{type:Number},
    genero:{type:String,enum:['Drama','Ciencia ficcion','Thriller','Comedia']}
    
});

module.exports=mongoose.model('SerieTV',serieSchema);

