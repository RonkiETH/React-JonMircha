import './App.css'
import Contador from './components/Contador'
import ContadorMejorado from './components/ContadorMejorado'
import CrudApi from './components/CrudApi'
import ShoppingCart from './components/ShoppingCart'

function App() {

  return (
    <div>
      <h1>useReducer</h1>
      {/* <hr />
      <Contador />
      <hr />
      <ContadorMejorado /> */}
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      
      <hr />
    </div>
  )
}

export default App
