    // src/controllers/productController.js
    const Product = require('../models/productModel.js')

    // Create (POST)
    exports.createProduct = async (req, res) => {
        try {
            let data = req.body
            let newItem = new Product(data)
            let saveProduct = newItem.save()
            // logc here 

            res.status(201).json(newItem);


        } catch (error) {
            res.status(400).json({
                message: 'Error creating product',
                error
            });
        }
    };

    // Read/View (GET)
    exports.getProducts = async (req, res) => {
        try {
            let data = await Product.find();
            //  logic to find

            res.status(200).json(data);

        } catch (error) {
            res.status(500).json({
                message: 'Error fetching products',
                error
            });
        }
    };

    // Get by ID (GET)
    exports.getProductById = async (req, res) => {
        try {

            // logic here
            const {proId} = req.params;
            const product = await Product.findById(proId);

            if (!product) {
                res.status(400).json({
                    message: "No product found"
                });
            }
            // write items to find and return matched item
            res.status(200).json(product);


        } catch (error) {
            res.status(500).json({
                message: 'Error fetching product',
                error
            });
        }
    };

    // Update (PUT)
    exports.updateProduct = async (req, res) => {
        try {

            //  logic here

        } catch (error) {
            res.status(400).json({
                message: 'Error updating product',
                error
            });
        }
    };

    // Delete (DELETE)
    exports.deleteProduct = async (req, res) => {
        try {

            // logic here 


        } catch (error) {
            res.status(500).json({
                message: 'Error deleting product',
                error
            });
        }
    };