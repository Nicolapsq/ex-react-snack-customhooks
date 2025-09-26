// 🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto


// Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

// Cosa deve fare?

//     Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
//     Ritorna true quando il tasto è premuto e false quando viene rilasciato.
//     Usa event listener su keydown e keyup.

import { useEffect, useState } from "react"

export default function useKeyPress(targetButton) {

    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === targetButton) {
            setIsPressed(true)
           };
        }
         const handleKeyUp = (e) => {
           if(e.key === targetButton) {
            setIsPressed(false)
           };
        }
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [targetButton]);

    return isPressed;
};