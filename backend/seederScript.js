require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);
        console.log("import data successfull");
        process.exit();
    } catch (error) {
        console.error("Import fail");
        process.exit(1);
    }
}

importData();