import mongoose from "mongoose"

const connectDb = async () => {
    try {
        console.log("MONGO URI:", process.env.MONGO_URI);
        console.log("MONGO ATLAS:", process.env.MONGO_ATLAS);

        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected successfully, ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Error", error.message);
        process.exit(1)
    }
}

export default connectDb