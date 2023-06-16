const express = require("express");
const router = express.Router();

// Require controller modules.
const rock_controller = require("../controllers/rockController");


/// ROCK ROUTES ///

// GET catalog home page.
router.get("/", rock_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/rock/create", rock_controller.rock_create_get);

// POST request for creating Book.
router.post("/rock/create", rock_controller.rock_create_post);

// GET request to delete Book.
router.get("/rock/:id/delete", rock_controller.rock_delete_get);

// POST request to delete Book.
router.post("/rock/:id/delete", rock_controller.rock_delete_post);

// GET request to update Book.
router.get("/rock/:id/update", rock_controller.rock_update_get);

// POST request to update Book.
router.post("/rock/:id/update", rock_controller.rock_update_post);

// GET request for one Book.
router.get("/rock/:id", rock_controller.rock_detail);

// GET request for list of all Book items.
router.get("/rocks", rock_controller.rock_list);

module.exports = router;
