
const express = require('express');
const app = express();

const bodyParser=require("body-parser");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();
app.set("view engine",'ejs');



baseRouter.get('/greeting', (req, res) => {
    return res.send('hello world!');
});

baseRouter.post('/add', (req, res) => {
    const{num1,num2}=req.body;
    const result=parseFloat(num1)+parseFloat(num2);

    res.json({ result});
});


baseRouter.post('/subtract', (req, res) => {
    const{num1,num2}=req.body;
    const result=parseFloat(num1)-parseFloat(num2);

    res.json({ result });
  
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});