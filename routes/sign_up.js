var express = require("express");
var router = express.Router();

// Require controller modules.
const sign_up_controller = require("../controllers/signUpController");

router.get('/', sign_up_controller.sign_up_get);

router.post("/", sign_up_controller.sign_up_post);


module.exports = router;
