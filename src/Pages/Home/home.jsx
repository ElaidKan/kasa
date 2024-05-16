import './home.scss'
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";

function Home() {
    return (
        <>
            <Banner text="Chez vous, partout et ailleurs" image="./public/banner.png" />
            <Card />
            <Footer />
            <div>
                
            </div>
        </>
    )
}

export default Home