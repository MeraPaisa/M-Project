const express = require('express');
const router = express.Router();

// Controller
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Middleware


// User Login
// router.post('/login', adminLoginValidation, authController.userLogin_post);
// router.post('/bajpai-panel/product/create', loginRequired, adminController.userProduct_post)
// router.post('/register', adminRegisterationValidation, authController.adminRegister_post);
router.get('/home', userController.home_get);


module.exports = router;
