var express=require("express");
var app=express();
var http=require("http");
var mongoose=require("mongoose");
var servidor=http.createServer(app);
var bodyParser=require("body-parser");
var methodOverride=require("method-override");

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());


// utilizamos el modelo y el controlador
var modeloSerie=require('./modelos/series');
var ControladorSerie=require('./controladores/series');

var rutas=express.Router();

rutas.route("/serie").post(ControladorSerie.insertar);
rutas.route("/serie").get(ControladorSerie.getSeries);
rutas.route("/serie/:id").get(ControladorSerie.getSerie);
rutas.route("/serie/:id").put(ControladorSerie.actualizar);
rutas.route("/serie/:id").delete(ControladorSerie.delete);
rutas.route("/").get(function(req,res) {
        var ayuda="Bienvenid a la API de Gestion de Series <br> USAR /serie o /serie/id ";
        res.status(200).send(ayuda);
    
});


//MiddleWare para las rutas definidas anteriores
app.use('/api',rutas);


mongoose.connect('mongodb://localhost:27017/netflix',function(err,res) {
    if (err) { console.log("Error al conectar con la BBDD de Mongo");}
    console.log("Conectado a MongoDB");
});

//routes=require("./rutas/rutas")(app);

servidor.listen(3000,function() {
    
    console.log("API REST SERIES ESCUCHANDO EN EL PUERTO 3000");
});



