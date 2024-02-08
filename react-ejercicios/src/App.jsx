import ContactForm from "./components/ContactForm"
import CrudApi from "./components/CrudApi"
import CrudApp from "./components/CrudApp"
import Modals from "./components/Modals"
import SelectsAnidados from "./components/SelectsAnidados"

function App() {

  return (
    <>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  )
}

export default App
