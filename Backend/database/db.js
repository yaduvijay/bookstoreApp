import mongoose from 'mongoose';
const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/BOOKSTORE`)
        console.log("MongoDb connect sucessfully")

    }
    catch(error){
        console.log("Mongodb connection failed",error );

    }
}
export default connectDB;