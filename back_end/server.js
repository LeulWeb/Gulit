//We will be importing express and the products.js file
const express = require('express');
const products = require('./data/products');

const cors = require('cors')

const app = express();

app.use(cors())


//Send the data from the backend
app.get('/',(req,res)=>{
    res.send("This is working fine")
})


//Serving the list of all data 
app.get('/api/products', (req, res)=>{
    res.json(products)
})

//Serving single product from the list
app.get('/api/products/:id', (req,res)=>{
    let product = products.find(p=> p._id == req.params.id);
    res.json(product)
})



//This will listen to port 5000
app.listen(5000, console.log('PORT IS RUNNING'));