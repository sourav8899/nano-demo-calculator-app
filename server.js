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
  const { num1, num2 } = req.body;
  
  const result = num1 + num2;
  

  res.status(200).json({ result });
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
