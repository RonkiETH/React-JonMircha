import PropTypes from 'prop-types';

export default function Propiedades(props) {
    return (
        <div>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdadero" : "Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
        </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las Props son un objeto"
};

Propiedades.propTypes = {
    porDefecto: PropTypes.string,
    cadena: PropTypes.string,
    numero: PropTypes.number,
    booleano: PropTypes.bool,
    arreglo: PropTypes.array,
    objeto: PropTypes.shape({
        nombre: PropTypes.string,
        correo: PropTypes.string
    }),
    funcion: PropTypes.func,
    elementoReact: PropTypes.element,
    componenteReact: PropTypes.elementType
};
