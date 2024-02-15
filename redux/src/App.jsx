import './App.css'
import TeoriaRedux from './components/TeoriaRedux'
import { Provider } from 'react-redux'
import store from './store/index'
import Contador from './components/Contador'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
      <hr />
      <Contador />
      <hr />
      <h1>Redux</h1>
      <TeoriaRedux />
    </Provider>
  )
}

export default App
