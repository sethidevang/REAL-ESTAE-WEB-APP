import mongoose from "mongoose";

export default  async function connectDB() {
    try {
        const uri = `${process.env.MONGODB_URI}real-estate`
        console.log(uri);
        const connection = await mongoose.connect(uri)
        console.log("connected to database", connection.connection.host)
    } catch (error) {
        console.log("error in database connection");
    }
}