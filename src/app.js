require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const logger = require('./helper/logger');

const app = express();

app.use(cors);
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.use((error, req, res, next) => {
  logger.error(error);
  return res.status(500).json({ erro: 'Problema na API' });
});

app.listen(process.env.PORT || 3000, () =>
  logger.info(`API FUNCIONANDO NA PORTA: ${process.env.PORT}`)
);
