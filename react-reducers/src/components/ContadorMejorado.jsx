import { useReducer } from 'react'
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer'
import { TYPES } from '../actions/contadorActions'

const ContadorMejorado = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit)

    const restar = () => {
        dispatch({ type: TYPES.DECREMENT})
    }
    const restar5 = () => {
        dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    }

    const sumar = () => {
        dispatch({ type: TYPES.INCREMENT})
    }

    const sumar5 = () => {
        dispatch({ type: TYPES.INCREMENT_5, payload: 5})
    }

    const reset = () => {
        dispatch({ type: TYPES.RESET })
    }
  return (
    <div>
        <h2>Contador Mejorado Reducer</h2>
        <nav>
            <button onClick={restar5}>-5</button>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <button onClick={sumar5}>+5</button>
            <button onClick={reset}>Reset</button>
        </nav>
        <h3>{state.count}</h3>
    </div>
  )
}

export default ContadorMejorado