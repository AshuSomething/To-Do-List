const express = require("express");
const BodyParser = require("body-parser");
// const ejs = require("ejs");

const list = ["hello", "ashu", "here"];

const app = express();
app.use(BodyParser.urlencoded({extende : true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("index", {listToRender: list, KindOfDay: day});
})

app.post("/", function(req,res){
    list.push(req.body.newItem);
    res.redirect("/");
})

const PORT = 3000;
app.listen(PORT, function(){
    console.log("Server is running at port 3000;");
})