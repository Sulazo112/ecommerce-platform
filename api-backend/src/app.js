const express = require('express');
const app = express();

app.use(express.json());

const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const ordersRoute = require('./routes/orders');

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

module.exports = app;

