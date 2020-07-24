require('dotenv').config();
const express = require ('express');
const morgan = require("morgan");
const routes = require("./routes");
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(cors);
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.listen(process.env.PORT || 3000, ()=> console.log(`API FUNCIONANDO NA PORTA: ${process.env.PORT}`));