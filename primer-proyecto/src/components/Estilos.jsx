import './Estilos.css'
import './Estilos.scss'
import moduleStyles from './Estilos.module.css'

export default function Estilos() {
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem",
        padding: "1rem",
        color: "#FFF",
    }
    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{ borderRadius: ".25rem", margin: "1rem" }}>
                Estilos en línea (atributo style)
            </h3>
            <h3 className="bg-react" style={myStyles}>Estilos en línea</h3>
            <h3 className="bg-react">
                Agregando Normalice con
                <br />
                <code>@import-normalize</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className='bg-sass'>Estilos con SASS</h3>
        </section>
    )
}