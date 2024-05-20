import './profil.scss'
import PropTypes from 'prop-types'

function Profil({name, picture}) {
  return (
    <div className="profil">
    <h3 className="nameProfil">{name}</h3>
    <img className="imgProfil" src={picture} alt={name} />
</div>
  )
}
Profil.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}
export default Profil