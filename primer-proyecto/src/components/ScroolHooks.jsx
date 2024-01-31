import { useEffect, useState } from "react";

export default function ScroolHooks() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        console.log("Hola")
        const detectarScroll = () => setScrollY(window.scrollY)

        window.addEventListener("scroll", detectarScroll)

        return () => window.removeEventListener("scroll", detectarScroll)
        
    }, [scrollY])

    return (
        <>
        <h2>Hooks useEffect y Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}