import Banner from "../../components/Banner/banner";
import Collaps from "../../components/Collaps/collaps";
import Footer from "../../components/Footer/footer";
import './about.scss'
import donneesCollaps from "../../data/collaps.json"


function About() {   
    return (
        <div>
            <Banner image="./public/banner a propos (1).png"/>
            <div>{donneesCollaps.map(collaps => <Collaps key={collaps.id} title={collaps.title} description={collaps.description} />)}</div>
            <Footer />
        </div>
    )
}
export default About