import './card.scss'
import logement from '../../data/logements.json'
import { Link } from 'react-router-dom'
function Card() {
  return (
    <div className='cardContainer'>
      {logement.map((logement) => (
        <Link to={`/logement/${logement.id}`} className="card" key={logement.id}>
          <img className="imgCard" src={logement.cover} alt={logement.title} />
          <h2 className='title'>{logement.title}</h2>
        </Link>
      ))}
      
    </div>
  )
}

export default Card