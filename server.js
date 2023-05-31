const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator';

app.use(express.json());

const baseRouter = express.Router();
app.set('view engine', 'ejs');

baseRouter.get('/greeting', (req, res) => {
  return res.status(200).send('hello world!');
});

baseRouter.post('/add', (req, res) => {
  var { num1, num2 } = req.body;


  res.status(200).json({ "result":num1+num2 });
});

baseRouter.post('/subtract', (req, res) => {
  var { num1, num2 } = req.body;
 

  res.json({ "result":num1-num2 });
});

app.use(baseUrl, baseRouter);

app.listen(PORT, () => {
  console.log('Server running at PORT', PORT);
});
