const registrationController = require("../controllers/registrationController");
const emailVerify = require("../controllers/emailVerify");
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");

const router = require("express").Router();


router.post('/registration',registrationController);
router.post('/login',loginController); 
router.post('/admin',adminController); 
router.post('/emailVerify/:token',emailVerify);


module.exports = router; 