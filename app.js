require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Todo List App API listening on port ${port}`);
});