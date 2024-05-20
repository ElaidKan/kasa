/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './stars.scss'
import { FaStar } from "react-icons/fa";

function Stars({rating}) {
    return (
        <div className="etoiles">
            {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={rating >= index + 1 ? 'etoilePleine' : 'etoileVide'} />
            ))}
        </div>
    )
}
export default Stars