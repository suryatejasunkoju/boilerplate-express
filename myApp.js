let express = require('express');
let app = express();

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/views/index.html");
});
app.use("/public", express.static(__dirname+"/public"));
console.log("Hello World");




app.get("/json", (req, res)=>{
    res.json({
        "message": "Hello json"
    })
})
































 module.exports = app;
