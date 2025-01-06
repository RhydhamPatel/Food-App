const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://rhydham:rhydham@rhydham.qk95h.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=rhydham";

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
