import './profil.scss'
import PropTypes from 'prop-types'

function Profil({name, picture}) {
  return (
    <div>
    <h3>{name}</h3>
    <img src={picture} alt={name} />
</div>
  )
}
Profil.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}
export default Profil