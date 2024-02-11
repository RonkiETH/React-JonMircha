import { memo, useMemo } from 'react' 

function ContadorHijo({ contador, sumar, restar }) {
    // let superNumero = 0;

    // for (let i = 0; i < 1000000000; i++) {
    //     superNumero++;
    // }

    const superNumero = useMemo(() => {
        let numero = 0;

        for (let i = 0; i < 1000000000; i++) {
            numero++;
        }
        return numero;
    },[]);

    console.log("render");
  return (
    <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
        <h2>Hijo del contador</h2>
        <nav>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </nav>
        <h3>{contador}</h3>
        <h3>{superNumero}</h3>
    </div>
  )
}

const MemoizedContadorHijo = memo(ContadorHijo);

export default MemoizedContadorHijo;