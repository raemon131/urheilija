const db = require("../config/db");

class Urheilija {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.paino = paino;
    this.kuva = kuva;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    let sql = `INSERT INTO urheilijat(etunimi,sukunimi,kutsumanimi,syntymavuosi,paino,kuva,laji,saavutukset)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;

    const [newUrheilija, _] = await db.execute(sql, [this.etunimi, this.sukunimi, this.kutsumanimi,
      this.syntymavuosi, this.paino, this.kuva, this.laji, this.saavutukset]);
    return newUrheilija;
  }

  async update(id) {
    let sql = `UPDATE urheilijat SET etunimi=?, sukunimi=?, kutsumanimi=?, syntymavuosi=?,
      paino=?, kuva=?, laji=?, saavutukset=? WHERE id=?`;

    const [result, _] = await db.execute(sql, [this.etunimi, this.sukunimi, this.kutsumanimi,
      this.syntymavuosi, this.paino, this.kuva, this.laji, this.saavutukset, id]);
    return result;
  }

  static findAll() {
    let sql = "SELECT * FROM urheilijat;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = "SELECT * FROM urheilijat WHERE id=?";
    return db.execute(sql, [id]);
  }

  static deleteById(id) {
    let sql = "DELETE FROM urheilijat WHERE id=?";
    return db.execute(sql, [id]);
  }
}

module.exports = Urheilija;
