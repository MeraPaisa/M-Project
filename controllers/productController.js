const Models = require("../database/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create Product
exports.createProduct_post = async (req, res) => {
    try {
        await Models.Product.create(
            // name: req.body.title,
            // email: req.body.email,
            // password: hashedPassword,
            req.body

        );
        return res.status(201).json({ success: true, message: `name: ${req.body.title} has been sucessfully created` });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
    }
}

// Edit Product
exports.editProduct_post = async (req, res) => {
    try {
        await Models.Product.update(
            req.body,
            { where: { id: req.params.productId } }
        );
        return res.status(201).json({ success: true, message: `name: ${req.body.title} has been sucessfully created` });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
    }
}

// Delete Product
exports.deleteProduct_delete = async (req, res) => {
    try {
        const deletedProduct = await Models.Product.destroy(
            { where: { id: req.params.productId } }
        );
        if (!deletedProduct == 0) {

            return res.status(201).json({ success: true, message: `Deleted Successfully` });
        } else {
            return res.status(201).json({ success: true, message: `NOT Deleted Successfully` });

        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
    }
}

