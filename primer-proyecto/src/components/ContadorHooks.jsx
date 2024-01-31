import { useState } from 'react';

export default function ContadorHooks () {
    const [contador, setContador] = useState(0);

    const restar = () => setContador(contador - 1);
    const sumar = () => setContador(contador + 1);
    return (
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </nav>
            <h3>{contador}</h3>
        </>
    )
}