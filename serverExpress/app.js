//importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

// const route = require("./routes/contact");
require("./routes")(app);

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/serverExpress", { useNewUrlParser: true })

//on connection
mongoose.connection.on("connected",()=>{
    console.log("Connected to database mongodb @ 27017");
});

//if error
mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("Error in Database connection : "+ err);
    }
});

//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//adding middleware - body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
// app.use("/api", route);
// app.use("/contact", require("./routes/contact"));

//testing server
app.get("/api",(req, res)=>{
    res.send({
        message: 'Hello from the Express API',
    });
})
app.listen(port,()=>{
    console.log("Server started at port : "+port);
});