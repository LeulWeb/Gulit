//We will be importing express and the products.js file
import express from 'express';
// import  products from './data/products.js';
import  dotenv  from 'dotenv'
import cors  from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'


dotenv.config()

 
const app = express();

app.use(cors())


app.use('/api/products', productRoutes)
connectDB();

//Send the data from the backend
app.get('/',(req,res)=>{
    res.send("This is working fine")
})




const mode = process.env.NODE_ENV
const port = process.env.PORT


//This will listen to port 5000
app.listen(port || 5000, console.log(`Application is running on ${mode} mode using port ${port}`));