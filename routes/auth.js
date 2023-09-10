const express = require('express');
const router = express.Router();

// Controller
const authController = require('../controllers/authController');

// Middleware
// const {adminRegisterationValidation,adminLoginValidation} = require('../joiValidation/auth')


// User Login
router.post('/login', authController.userLogin_post);
router.post('/register', authController.userRegister_post);
router.post('/admin/login', authController.adminLogin_post);
router.post('/admin/register', authController.adminRegister_post);
// router.post('/test', authController.test);

module.exports = router;
