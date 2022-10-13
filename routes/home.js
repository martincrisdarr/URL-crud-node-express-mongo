const express = require("express");
const { leerUrls, agregarUrls, eliminarUrls } = require("../controllers/homeController");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrls)
router.get("/eliminar/:id", eliminarUrls)


module.exports = router;
