const Urheilija = require("../models/Urheilija");

exports.getAllUrheilijat = async (req, res, next) => {
  try {
    const [urheilijat, _] = await Urheilija.findAll();
    res.status(200).json({ count: urheilijat.length, urheilijat });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUrheilijaById = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    let [urheilija, _] = await Urheilija.findById(urheilijaId);
    res.status(200).json({ urheilija: urheilija[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewUrheilija = async (req, res, next) => {
  try {
    let { etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset } = req.body;
    let urheilija = new Urheilija(etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset);
    urheilija = await urheilija.save();
    res.status(201).json({ message: "Urheilija created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateUrheilija = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    let { etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset } = req.body;
    let urheilija = new Urheilija(etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset);
    await urheilija.update(urheilijaId);
    res.status(200).json({ message: "Urheilija updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteUrheilija = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    await Urheilija.deleteById(urheilijaId);
    res.status(200).json({ message: "Urheilija deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
