const express = require("express");
const router = express.Router();

// Require controller modules.
const pet_controller = require("../controllers/petController");


/// PET ROUTES ///

// GET catalog home page.
router.get("/", pet_controller.index);

router.get("/pet/create", pet_controller.pet_create_get);

router.post("/pet/create", pet_controller.pet_create_post);

router.get("/pet/:id/delete", pet_controller.pet_delete_get);

router.post("/pet/:id/delete", pet_controller.pet_delete_post);

router.get("/pet/:id/update", pet_controller.pet_update_get);

router.post("/pet/:id/update", pet_controller.pet_update_post);

router.get("/pet/:id", pet_controller.pet_detail);

router.get("/pets", pet_controller.pet_list);

module.exports = router;
