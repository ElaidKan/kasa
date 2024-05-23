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
import Errorpage from "../Errorpage/errorpage";
import Navbar from "../../components/Navbar/navbar";


function FicheLogement() {

    let { idlogement } = useParams(); // Unpacking and retrieve id
    let logement = logementData.find(app => app.id === idlogement);
    if (!logement) {
        return <Errorpage />
    }
    return (
        <>
            <Navbar />
            <Slider images={logement.pictures} alt={logement.title} />

            <div className="information">
                <div>
                    <Title title={logement.title} location={logement.location} />
                    <Tag tags={logement.tags} />
                </div>
                <div className="profilStars">
                    <Stars rating={logement.rating} />
                    <Profil name={logement.host.name} picture={logement.host.picture} />
                </div>
            </div>
            <div className="ensembleCollaps">
                <Collaps title="Description" description={logement.description} />
                <Collaps title="Equipement" description={<List equipments={logement.equipments} />} />
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement