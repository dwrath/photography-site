import Navbar from "./Navbar";
import HeroScene from "./HeroScene";
import Carousel from "./Featured";
import Services from './Services';
import Work from "./Work";
import Reviews from "./Reviews";
import Footer from "./Footer";


function Home(){
    return(
        <div className="page-wrapper">
            <Navbar/>
            <HeroScene/>
            <Carousel/>
            <Services/>
            <Work/>
            <Reviews/>
            <Footer/>
        </div>
    )
}
export default Home;