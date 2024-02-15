import { useSelector, useDispatch } from 'react-redux'
import { reset, restar, restar5, sumar, sumar5 } from '../actions/contadorActions';

const Contador = () => {
    const state = useSelector((state) => state.contador);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Contador Redux</h2>
        <nav>
            <button onClick={() => dispatch(restar5())}>-5</button>
            <button onClick={() => dispatch(restar())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(sumar())}>+</button>
            <button onClick={() => dispatch(sumar5())}>+5</button>
        </nav>
        <h3>{state}</h3>
    </div>
  )
}

export default Contador