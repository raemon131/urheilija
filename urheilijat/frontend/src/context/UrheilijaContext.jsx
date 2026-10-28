import { createContext, useState, useEffect } from "react";

const API = "http://localhost:3000/urheilijat";

export const UrheilijaContext = createContext();

export function UrheilijaProvider({ children }) {
  const [urheilijat, setUrheilijat] = useState([]);
  const [muokattava, setMuokattava] = useState(null);

  const haeUrheilijat = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setUrheilijat(data.urheilijat);
  };

  useEffect(() => {
    haeUrheilijat();
  }, []);

  const lisaaUrheilija = async (urheilija) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(urheilija),
    });
    haeUrheilijat();
  };

  const paivitaUrheilija = async (id, urheilija) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(urheilija),
    });
    haeUrheilijat();
  };

  const poistaUrheilija = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    haeUrheilijat();
  };

  return (
    <UrheilijaContext.Provider
      value={{
        urheilijat,
        muokattava,
        setMuokattava,
        lisaaUrheilija,
        paivitaUrheilija,
        poistaUrheilija,
      }}
    >
      {children}
    </UrheilijaContext.Provider>
  );
}
