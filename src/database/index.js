import mongoose from "mongoose";


const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://promptopia:twWhwov7pt4mRZEw@cluster0.hiuu2xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(connectionUrl)
        .then(() => console.log("Connection to database successfully!"))
        .catch((error) => console.log(error))
}

export default connectToDB;