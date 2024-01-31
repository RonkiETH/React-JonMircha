import './App.css'
import Componente from './components/Componente'
import ContadorHooks from './components/ContadorHooks'
import Eventos from './components/Eventos'
import Propiedades from './components/Propiedades'
import RelojHooks from './components/RelojHooks'
import ScroolHooks from './components/ScroolHooks'

function App() {

  return (
    <>
      <Componente msg="Hola soy un componente Funcional desde una prop" />
      <hr />
      <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={19}
        booleano={false}
        arreglo={[1,2,3]}
        objeto={{nombre: "Juan", correo: "ronquillojuanignacio@gmail.com"}}
        funcion={(num) => num * num}
        elementoReact={<i>Esto es un elemento React</i>}
      />
      <hr />
      <Eventos />
      <hr />
      <ContadorHooks />
      <hr />
      <ScroolHooks />
      <hr />
      <RelojHooks />
    </>
  )
}

export default App
