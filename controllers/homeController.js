const Url = require('../models/Url')
const { v4 } = require("uuid");

const leerUrls = async (req, res) => {
  try{
    const urls = await Url.find().lean()
    res.render("home", {urls: urls})
  }catch(error){
    console.log(error)
    res.send('fallo algo en leer')
  }
}

const agregarUrls = async (req,res) => {
  const {origin} = req.body
    try {
      const url = new Url({origin: origin, shortURL: v4()})
      await url.save()
      res.redirect('/')
    } catch(error) {
      console.log(error)
      res.send('Algo fallo en agregar')
    }
}
const eliminarUrls = async (req,res) => {
  const {id} = req.params
  try {
    await Url.findByIdAndDelete(id)
    res.redirect("/")
  }catch(error){
    console.log(error)
      res.send('Algo fallo en eliminar')
  }
}
module.exports = {
  leerUrls,
  agregarUrls,
  eliminarUrls
}