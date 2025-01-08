const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const mongoUri = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to DB");
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const fetchedCategories = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        global.food_items = fetchedData;
        global.foodCategory = fetchedCategories;
        // console.log("food_items", global.food_items);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
}

module.exports = mongoDB;
