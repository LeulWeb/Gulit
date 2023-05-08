//We will be importing express and the products.js file
import express from 'express';
import  products from './data/products.js';
import  dotenv  from 'dotenv'
import cors  from 'cors';

dotenv.config()


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


const mode = process.env.NODE_ENV
const port = process.env.PORT


//This will listen to port 5000
app.listen(port || 5000, console.log(`Application is running on ${mode} mode using port ${port}`));