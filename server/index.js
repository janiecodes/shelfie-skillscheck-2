require('dotenv').config();

const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} =process.env

app.use(express.json());


app.get('/api/inventory', ctrl.getInventoryList)
app.get('/api/product/:id', ctrl.getOneProduct)
app.post('/api/product', ctrl.createProduct)
app.put('/api/product/:id', ctrl.editProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
}).then((db) => {
    app.set('db', db)
}).catch(err => console.log(err));


app.listen(SERVER_PORT, () => console.log(`Yahoo! Server listening on Port:${SERVER_PORT}`));