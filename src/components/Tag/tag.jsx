import './tag.scss'
import PropTypes from 'prop-types'


function Tag({tags}) {
    return (
        <div className='tags'>
            {tags.map((tag, id) => (
                <span className="tag" key={id}>{tag}</span>
            ))}
        </div>
    )
}
Tag.propTypes = {
    tags: PropTypes.array.isRequired
}
export default Tag