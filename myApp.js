let express = require('express');
let app = express();

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/views/index.html");
});
app.use("/public", express.static(__dirname+"/public"));
console.log("Hello World");





































 module.exports = app;
