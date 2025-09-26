// 🏆 Snack 2: useDate() – Ottenere la Data Attuale

// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

//     Restituisce un oggetto con data e ora formattata.
//     Si aggiorna automaticamente ogni secondo.
//     Usa useEffect() per gestire l’aggiornamento.

import { useState, useEffect } from "react";

export default function useDate(initialValue = new Date()) {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return time;
}
