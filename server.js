const app = require('./app');
const port = 4000;
app.listen(port, ()=>{
    console.log("Listening to request on PORT: "+port);
});