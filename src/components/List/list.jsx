import './list.scss'
import PropTypes from 'prop-types'

function List({ equipments }) {
    return (
        <div>
            <ul>
                {equipments.map((equipement, id) => (
                    <li key={id}>{equipement}</li>
                ))}
            </ul>
        </div>
    )
}
List.propTypes = {
    equipments: PropTypes.array.isRequired
}
export default List