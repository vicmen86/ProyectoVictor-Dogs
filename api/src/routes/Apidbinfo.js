const fetch = require("node-fetch");
const { Dog, Temperament } = require("../db");

//-----------------------------------
const getAPIinfo = async () => {
  const apiURL = await fetch(
    "https://api.thedogapi.com/v1/breeds?api_key=live_RKPXE7BmufjRloOZjGNsK1AQAqRMTHpHxj9WCwdyDKLHYQynohJZQKpCSOvLtxj5"
  ).then((response) => response.json());
  return apiURL;
};

const getDBInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
//Uno toda la info
const getAllInfo = async () => {
  let apiinfo = await getAPIinfo();
  apiinfo.map((el) => {el.createdByDB = false});
  apiinfo.map((el) => {
    if (el.hasOwnProperty("temperament")) {
      let element = el.temperament;
      let Temps = element.split(",");
      let TempMaps = Temps.map((el) => {return { name: el }});
      el.temperament = TempMaps;
    }
  });
  let dbinfo = await getDBInfo();
  let totalinfo = await apiinfo.concat(dbinfo); 
  return totalinfo;
};

//correccion de datos de la api.
const totalinfo = async () => {
  let allInfo = await getAllInfo();
  allInfo.forEach((el) => {
    if (el.name == "Olde English Bulldogge") {
      el.weight.metric = "22-30";
    }
    if (!el.weight.metric.includes("-")) {
      el.weight.metric = `4 - ${el.weight.metric}`;
    } 
    allInfo.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      
      return 0;
    });
  });
  return allInfo;
};

//----------------------
const getTemp = async () => {
  let aPiInfo2 = await getAPIinfo();
  let tempApi = aPiInfo2.map((el) => el.temperament).sort().join();
  let tempArr = tempApi.split(",",tempApi.length).sort();
  let TempArrayToSet = new Set(tempArr);
  let FilteredTemps = Array.from(TempArrayToSet); 
  FilteredTemps.shift();// elimino el espacio
  FilteredTemps = FilteredTemps.map((el) => ({name: el,}));
  //console.log(FilteredTemps);
  await Temperament.bulkCreate(FilteredTemps);
  return FilteredTemps;
};

//------------------------
const post = async (name, weight, height, life_span, temperament, image) => {
  let newDog = await Dog.create({
    name: name,
    height: { metric: height },
    weight: { metric: weight },
    life_span: life_span,
    image: image,
    createdByDB: true,
  });
  let TemperamentDB = await Temperament.findAll({where: { name: temperament },});

  return await newDog.addTemperament(TemperamentDB);
};

module.exports = { getAPIinfo, getAllInfo, totalinfo, getTemp, post };
