import { useState } from "react"

export default function Eventos () {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <hr />
            <h2>Eventos en React</h2>
            <button onClick={handleAdd}>-</button>
            <h3>{count}</h3>
            <button onClick={handleSubstract}>+</button>
        </div>
    )
}