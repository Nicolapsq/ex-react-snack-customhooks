// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse

// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

//     Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
//     Posiziona il componente al posto del puntatore del mouse.
//     Il componente segue i movimenti del mouse.


import { useState, useEffect } from "react";

export default function useCustomPointer(cursorContent) {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {

    const mouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }

    window.addEventListener("mousemove", mouseMove);

    // document.body.style.cursor = "none";

    return () => {
    window.removeEventListener("mousemove", mouseMove);
    // document.body.style.cursor = "auto";

    }
    }, []);

      const CustomCursor = (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        // cursor: "none",
        pointerEvents: "none", // non blocca click
        zIndex: 9999,
        fontSize: "2rem",
      }}
    >
      {cursorContent}
    </div>
  );

  return CustomCursor;
}


