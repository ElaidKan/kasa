import Footer from "../../components/Footer/footer";
import './fichelogement.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import logementData from '../../data/logements.json'
// import Slider from "../../components/Slider/slider";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


function FicheLogement() {
    const [ouvrirDescription, setouvrirDescription] = useState(false)
    const [ouvrirEquipement, setouvrirEquipement] = useState(false)

    let { idlogement } = useParams(); // Unpacking and retrieve id
    let logement = logementData.find(app => app.id === idlogement);
    return (
        <>
            {/* <Slider /> */}
            <div>
                <div>
                    <div>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div>
                        {logement.tags.map((tag, id) => (
                            <span key={id}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className={logement.rating >= index + 1 ? 'etoilePleine' : 'etoileVide'} />
                        ))}
                    </div>
                    <div>
                        <h3>{logement.host.name}</h3>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div onClick={() => setouvrirDescription(!ouvrirDescription)}>
                        <h2>Description</h2>
                        <IoChevronDownOutline className={ouvrirDescription ? 'rotate' : ''} />
                    </div>
                    {ouvrirDescription && <p>{logement.description}</p>}
                </div>
                <div>
                    <div onClick={() => setouvrirEquipement(!ouvrirEquipement)}>
                        <h2>Equipements</h2>
                        <IoChevronDownOutline className={ouvrirEquipement ? 'rotate' : ''} />
                    </div>
                    {ouvrirEquipement && (
                        <ul>
                            {logement.equipments.map((equipement, id) => (
                                <li key={id}>{equipement}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement