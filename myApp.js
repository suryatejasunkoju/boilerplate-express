let express = require('express');
let app = express();

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/views/index.html");
});
app.use("/public/style.css", express.static());
console.log("Hello World");



































 module.exports = app;
