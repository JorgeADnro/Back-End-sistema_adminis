const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRouters = require('./routes/users');
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");


// middleware
app.use(cors());
app.use(express.json());
app.use('/api/', userRouters);


// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlass'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port',port));