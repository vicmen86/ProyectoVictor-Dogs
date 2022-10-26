const { Router } = require("express");
const fetch = require("node-fetch");
const { save } = require("sequelize");
const { Dog, Temperament } = require("../db");
const { totalinfo, getTemp, post } = require("../routes/Apidbinfo.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", (req, res) => {
  let promise = new Promise((resolve, reject) => {
    totalinfo().then((data) => resolve(data));
  });

  if (req.query.name) {
    const { name } = req.query;
    promise.then((data) => data.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()) 
      ).then((data) => {
        return res.json(data);
      }).catch((err) => console.log(err));
  } else {
    promise.then((data) => {
      return res.json(data);
    });
  }
});

router.get("/dogs/:name", async (req, res) => {
  const { name } = req.params;
  try {
     let allInfo = await totalinfo();
  let DogParams = allInfo.find(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  );
  DogParams
    ? res.status(200).send(DogParams)
    : res.status(404).send("No esta llegando un nombre correcto por params");
  } catch (error) {
    res.status(404).send(error);
  }
 });
 
router.get("/temperament", async (req, res) => {
  try {
     let getDBInfo = await Temperament.findAll();
  if (getDBInfo.length > 0) {
    res.json(getDBInfo);
  } else {
    let filterTemps = await getTemp();
    filterTemps
      ? res.status(200).json(filterTemps)
      : res.status(404).json({ error: "No hay temperamentos para mostrar" });
  }
  } catch (error) {
    res.status(404).send(error);
  }
 
});

router.post("/dog", async (req, res) => {
  try {
    const { name, weight, height, life_span, temperament, image } = req.body;
    await post(name, weight, height, life_span, temperament, image);

  return res.status(200).json({ msg: "perro creado" });
  } catch (error) {
    res.status(404).send(error);
  }
  
});

module.exports = router;
