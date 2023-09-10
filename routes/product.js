const express = require('express');
const router = express.Router();

// Controller
const productController = require('../controllers/productController');

// Middleware
// const {adminRegisterationValidation,adminLoginValidation} = require('../joiValidation/auth')
const adminLoginRequired = require('../middlewares/adminLoginRequired')



// User Login
router.post('/create', adminLoginRequired, productController.createProduct_post);
router.post('/edit/:productId', adminLoginRequired, productController.editProduct_post);
router.delete('/delete/:productId', adminLoginRequired, productController.deleteProduct_delete);
// router.post('/register', authController.adminRegister_post);

module.exports = router;
