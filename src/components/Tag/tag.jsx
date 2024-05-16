import './tag.scss'
import PropTypes from 'prop-types'


function Tag({tags}) {
    return (
        <div>
            {tags.map((tag, id) => (
                <span key={id}>{tag}</span>
            ))}
        </div>
    )
}
Tag.propTypes = {
    tags: PropTypes.array.isRequired
}
export default Tag