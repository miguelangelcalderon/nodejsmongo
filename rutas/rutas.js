
// MANEJO DE RUTAS DE LA API
module.exports=function(app) {

app.get('/',function(req,res) {
    res.send("API REST FULL SERIES");
});

    
app.get('/serie',function(req,res) {
    res.send("Quieres todas las series");
});
app.get('/serie/:id',function(req,res) {
    res.send("Quieres una serie");
});
app.post('/serie',function(req,res) {
    res.send("Quieres dar de alta una serie");
});
app.put('/serie/:id',function(req,res) {
    res.send("Quieres actualizar una serie");
});
app.delete('/serie/:id',function(req,res) {
    res.send("Quieres borrar una serie");
});

}
