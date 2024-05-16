import './title.scss'
import propTypes from 'prop-types'
function Title({title, location}) {
    return (
        <div    className ='titleContainer'>
            <h1>{title}</h1>
            <p className='location'>{location}</p>
        </div>
    )
}
Title.propTypes = {
    title: propTypes.string.isRequired,
    location: propTypes.string.isRequired
}
export default Title