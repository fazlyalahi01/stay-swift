import mongoose from "mongoose";


let isConnected = false;
let connection = null;

console.log(isConnected, "isConnected");
console.log(connection, "connection");

const dbConnect = async () => {
    console.log("inside db connect");
    console.log(process.env.MONGODB_URI, "MONGODB_URI");
    try {
        if (isConnected) return connection
        connection = await mongoose.connect(String(process.env.MONGODB_URI));
        console.log(connection, "connection");
        isConnected = true;
        return connection
    } catch (e) {
        console.error(e);
    }
}

export default dbConnect; 