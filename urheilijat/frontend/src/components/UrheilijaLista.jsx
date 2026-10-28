import { useContext } from "react";
import { UrheilijaContext } from "../context/UrheilijaContext";

function UrheilijaLista() {
  const { urheilijat, setMuokattava, poistaUrheilija } = useContext(UrheilijaContext);

  return (
    <div>
      {urheilijat.map((u) => (
        <div key={u.id}>
          <h3>
            {u.etunimi} "{u.kutsumanimi}" {u.sukunimi}
          </h3>
          <img src={u.kuva} alt={u.sukunimi} width="150" />
          <p>Syntynyt: {u.syntymavuosi}</p>
          <p>Paino: {u.paino} kg</p>
          <p>Laji: {u.laji}</p>
          <p>Saavutukset: {u.saavutukset}</p>
          <button onClick={() => setMuokattava(u)}>Muokkaa</button>
          <button onClick={() => poistaUrheilija(u.id)}>Poista</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UrheilijaLista;
