require('dotenv').config();

const express = require("express");
const ejs = require("ejs");
const sendMail = require("./mail");
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/" , (req,res) => {
    res.render("home");
});

 app.get("/aboutus", (req,res) => {
     res.render("aboutus");
 });

app.get("/gallary" , (req,res) => {
    res.render("gallary");
});

app.get("/services" , (req,res) => {
    res.render("services");
});

app.get("/contactus" , (req,res) => {
    res.render("contactus");
});

app.get("/informationtechnology" , (req,res) => {
    res.render("I&T");
});

app.get("/construction" , (req,res) => {
    res.render("construction");
});

app.get("/granite" , (req,res) => {
    res.render("gm");
});

app.get("/import&export" , (req,res) => {
    res.render("ei");
});

app.get("/granite/black-galaxy", (req,res) => {
    res.render("black-galaxy");
});

app.get("/granite/steel-grey", (req,res) => {
    res.render("steel-grey");
});

app.get("/granite/black-pearl", (req,res) => {
    res.render("black-pearl");
});

app.get("/granite/absolute-black", (req,res) => {
    res.render("absolute-black");
});

app.get("/granite/maple-red", (req,res) => {
    res.render("maple-red");
});

app.get("/granite/tan-brown", (req,res) => {
    res.render("tan-brown");
});

app.get("/granite/moon-white", (req,res) => {
    res.render("moon-white");
});

app.get("/granite/vizag-blue", (req,res) => {
    res.render("vizag-blue");
});

app.get("/granite/quartz-stone", (req,res) => {
    res.render("quartz-stone");
});

app.post("/email", (req,res) => {

    const email = req.body.email;
    const subject = req.body.subject;
    const text = req.body.msg;


    sendMail(email, subject, text, function(err,data) {
        if(err){
            res.status(500).json({message: "mail send failed"});
        } else {
            res.render("mail-success");
        }
    })

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 30;
}

app.listen(port, function() {
  console.log("Server started on port 30");
});
