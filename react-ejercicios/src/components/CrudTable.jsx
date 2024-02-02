
import CrudTableRow from './CrudTableRow'
import PropTypes from 'prop-types'

export default function CrudTable({ data, setDataToEdit, deleteData}) {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 
                        ? <tr><td colSpan="3">Sin datos</td></tr> 
                        : data.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

CrudTable.propTypes = {
    data: PropTypes.array,
    setDataToEdit: PropTypes.func,
    deleteData: PropTypes.func
}