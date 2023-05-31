const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator';

app.use(express.json());

const baseRouter = express.Router();
app.set('view engine', 'ejs');

baseRouter.get('/greeting', (req, res) => {
  return res.send('hello world!');
});

baseRouter.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if(parseInt(num1)>=
  0&&parseInt(num2)>=0){
  const result = num1 + num2;}
  result=null;

  res.json({ result });
});

baseRouter.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;

  res.json({ result });
});

app.use(baseUrl, baseRouter);

app.listen(PORT, () => {
  console.log('Server running at PORT', PORT);
});
