import mongoose from 'mongoose';
import colors from 'colors';

const connectDB =async()=>{
    //This is a async and returns a promise
    try {
        const conn = await  mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            // useCreateIndex: true,
    })

    console.log(`MongoDB connected successfully ${conn.connection.host}`.green.bold.underline)
    } catch (error) {
        console.log(`Error ${error.message}`.red.underline.bold)
        process.exit(1);
    }
}

export default connectDB;