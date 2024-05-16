/* eslint-disable react/prop-types */
import './collaps.scss'
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from 'react'
function Collaps({ title, description }) {
    const [ouvrirDescription, setouvrirDescription] = useState(false)
    return (
        <div>
            <div onClick={() => setouvrirDescription(!ouvrirDescription)}>
                <h2>{title}</h2>
                <IoChevronDownOutline className={ouvrirDescription ? 'rotate' : ''} />
            </div>
            {ouvrirDescription && <span>{description}</span>}
        </div>
    )
}

export default Collaps