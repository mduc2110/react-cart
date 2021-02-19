const express = require('express');
const router = express.Router();

const { getAllProduct, getProductById } = require('../controller/productControllers');

//@desc GET all products
router.get('/', getAllProduct);

//@desc GET product by id
router.get('/:id', getProductById);

module.exports = router;