const Product = require('../models/Product');

const getAllProduct = (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

const getProductById = (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {
    getAllProduct,
    getProductById
}