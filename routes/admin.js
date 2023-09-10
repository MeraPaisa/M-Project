const express = require('express');
const router = express.Router();

// Controller
const adminController = require('../controllers/adminController');

// Middleware
const { adminRegisterationValidation, adminLoginValidation } = require('../joiValidation/auth');


// User Login
router.post('/login', adminLoginValidation, authController.adminLogin_post);
router.post('/bajpai-panel/product/create', loginRequired, adminController.createProduct_post)
router.post('/register', adminRegisterationValidation, authController.adminRegister_post);

module.exports = router;
