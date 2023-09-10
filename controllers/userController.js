const Models = require("../database/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.home_get = async (req, res) => {
    try {
        const products = await Models.Product.findAll()
        if (!products) {

            return res.status(401).json({ success: false, message: "No data found", data: products })
        }
        return res.status(401).json({ success: true, data: products })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
    }
}