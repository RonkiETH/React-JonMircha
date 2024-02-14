import PropTypes from 'prop-types'

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
    
    let { name, constellation, id } = el
    
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

CrudTableRow.propTypes = {
    el: PropTypes.shape({
        name: PropTypes.string,
        constellation: PropTypes.string,
        id: PropTypes.number
    }),
    setDataToEdit: PropTypes.func,
    deleteData: PropTypes.func
}