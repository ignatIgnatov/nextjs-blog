import mongoose from "mongoose";


const connectToDB = async () => {
    const connectionUrl = process.env.DATABASE_URL;

    mongoose.connect(connectionUrl)
        .then(() => console.log("Connection to database successfully!"))
        .catch((error) => console.log(error))
}

export default connectToDB;