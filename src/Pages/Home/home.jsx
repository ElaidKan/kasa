import './home.scss'
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
function Home() {
    return (
        <>
        <Navbar />
            <Banner text="Chez vous, partout et ailleurs" image="./public/banner.png" />
            <Card />
            <Footer />
        </>
    )
}

export default Home