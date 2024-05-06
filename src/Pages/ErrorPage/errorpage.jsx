import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Erreur from "../../components/Erreur404/erreur";
import './error.scss'

function Error() {
    return (
        <div>
            <Banner />
            <Footer />
            <Erreur />
        </div>
    )
}
export default Error