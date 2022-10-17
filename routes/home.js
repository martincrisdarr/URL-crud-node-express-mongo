const express = require("express");
const {
  leerUrls,
  agregarUrls,
  eliminarUrls,
  editarUrlForm,
  editarUrl,
  redireccionamiento,
} = require("../controllers/homeController");
const urlValidar = require("../middlewares/urlValida");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", urlValidar, agregarUrls);
router.get("/eliminar/:id", eliminarUrls);
router.get("/editar/:id", editarUrlForm);
router.post("/editar/:id", urlValidar, editarUrl);
router.get("/:shortURL", redireccionamiento);

module.exports = router;
