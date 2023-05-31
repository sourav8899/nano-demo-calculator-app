const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ejs=require("ejs");
const bodyparser=require("body-parser");
const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();
app.set("view engine",'ejs');

baseRouter.post('/addition',(req,res)=>{
 res.send("hello");
 res.redirect()
})
baseRouter.post('/sub',(req,res)=>{
    return res.send("hello");
    });
baseRouter.post('/mul',(req,res)=>{
        return res.send("hello");
        });
baseRouter.post('/div',(req,res)=>{
            return res.send("hello");
            });
baseRouter.get('',(req,res)=>{
    return res.render("home");
});
baseRouter.get('/greeting', (req, res) => {
    return res.send('hello');
});

baseRouter.post('/add', (req, res) => {
    res.json({ "": null });
});


baseRouter.post('/subtract', (req, res) => {
    res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});