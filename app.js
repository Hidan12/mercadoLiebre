const express = require("express");
const app = express();
app.use(express.static("public"))

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  })
  
app.get("/", (_, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.post("/", (_, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.get("/register", (_, res)=>{
    res.sendFile(__dirname + "/views/register.html")
})
app.get("/login", (_, res)=>{
    res.sendFile(__dirname + "/views/login.html")
})