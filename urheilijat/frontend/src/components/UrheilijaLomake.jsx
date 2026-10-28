import { useContext, useState, useEffect } from "react";
import { UrheilijaContext } from "../context/UrheilijaContext";

const tyhja = {
  etunimi: "",
  sukunimi: "",
  kutsumanimi: "",
  syntymavuosi: "",
  paino: "",
  kuva: "",
  laji: "",
  saavutukset: "",
};

function UrheilijaLomake() {
  const { muokattava, setMuokattava, lisaaUrheilija, paivitaUrheilija } = useContext(UrheilijaContext);
  const [lomake, setLomake] = useState(tyhja);

  useEffect(() => {
    setLomake(muokattava ? muokattava : tyhja);
  }, [muokattava]);

  const muutos = (e) => {
    setLomake({ ...lomake, [e.target.name]: e.target.value });
  };

  const tallenna = (e) => {
    e.preventDefault();
    if (muokattava) {
      paivitaUrheilija(muokattava.id, lomake);
    } else {
      lisaaUrheilija(lomake);
    }
    setMuokattava(null);
    setLomake(tyhja);
  };

  return (
    <form onSubmit={tallenna}>
      <h2>{muokattava ? "Muokkaa urheilijaa" : "Lisää urheilija"}</h2>
      <input name="etunimi" placeholder="Etunimi" value={lomake.etunimi} onChange={muutos} required />
      <input name="sukunimi" placeholder="Sukunimi" value={lomake.sukunimi} onChange={muutos} required />
      <input name="kutsumanimi" placeholder="Kutsumanimi" value={lomake.kutsumanimi} onChange={muutos} />
      <input name="syntymavuosi" type="date" value={lomake.syntymavuosi} onChange={muutos} required />
      <input name="paino" type="number" placeholder="Paino" value={lomake.paino} onChange={muutos} required />
      <input name="kuva" placeholder="Kuvan www-linkki" value={lomake.kuva} onChange={muutos} />
      <input name="laji" placeholder="Laji" value={lomake.laji} onChange={muutos} />
      <input name="saavutukset" placeholder="Saavutukset" value={lomake.saavutukset} onChange={muutos} />
      <button type="submit">Tallenna</button>
      {muokattava && <button type="button" onClick={() => setMuokattava(null)}>Peruuta</button>}
    </form>
  );
}

export default UrheilijaLomake;
