import Footer from "../../components/Footer/footer";
import './fichelogement.scss'
import { useParams } from 'react-router-dom'
import logementData from '../../data/logements.json'
import Slider from "../../components/Slider/slider";
import Title from "../../components/Title/title";
import Tag from "../../components/Tag/tag";
import Stars from "../../components/Stars/stars";
import Profil from "../../components/Profil/profil";
import Collaps from "../../components/Collaps/collaps";
import List from "../../components/List/list";


function FicheLogement() {

    let { idlogement } = useParams(); // Unpacking and retrieve id
    let logement = logementData.find(app => app.id === idlogement);
    return (
        <>
            <Slider images={logement.pictures} alt={logement.title}/>

            <div>
                <div>
                   <Title title = {logement.title} location = {logement.location}/>
                    <Tag tags = {logement.tags}/>
                </div>
                <div>
                   <Stars rating={logement.rating}/>
                   <Profil name={logement.host.name} picture={logement.host.picture}/>
                </div>
            </div>
            <div>
                <Collaps title="Description" description={logement.description}/>
                <Collaps title="Equipement" description={<List equipments={logement.equipments} />} />
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement