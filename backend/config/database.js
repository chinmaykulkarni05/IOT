const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,   // Optional, remove if using Mongoose v6 or later
        useUnifiedTopology: true // Optional, remove if using Mongoose v6 or later
    })
    .then(() => {
        console.log("Database connection successful!");
    })
    .catch((error) => {
        console.error("Issue with DB connection:");
        console.error(error.message);
        process.exit(1); // Exit the process if DB connection fails
    });
}

module.exports = dbConnect;
