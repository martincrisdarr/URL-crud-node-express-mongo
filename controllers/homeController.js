const Url = require("../models/Url");
const { v4 } = require("uuid");

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("fallo algo en leer");
  }
};

const agregarUrls = async (req, res) => {
  const { origin } = req.body;
  try {
    const url = new Url({ origin: origin, shortURL: v4() });
    await url.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Algo fallo en agregar");
  }
};
const eliminarUrls = async (req, res) => {
  const { id } = req.params;
  try {
    await Url.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Algo fallo en eliminar");
  }
};

const editarUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findById(id).lean();
    res.render("home", { url });
  } catch (error) {
    console.log(error);
    res.send("Algo fallo al editar");
  }
};
const editarUrl = async (req, res) => {
  const { id } = req.params;
  const { origin } = req.body;
  try {
    await Url.findByIdAndUpdate(id, { origin });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Algo fallo al editar");
  }
};
const redireccionamiento = async (req, res) => {
  const { shortURL } = req.params;
  try {
    const urlDB = await Url.findOne({ shortURL });
    res.redirect(urlDB.origin);
  } catch {}
};
module.exports = {
  leerUrls,
  agregarUrls,
  eliminarUrls,
  editarUrlForm,
  editarUrl,
  redireccionamiento,
};
