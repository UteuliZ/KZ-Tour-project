import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Destination from "../../Components/Destination/Destination";
import Tour from "../../Components/Tour/Tour";
import Footer from "../../Components/Footer/Footer";
import AboutImg from "../../images/home.jpg";
import Schedule from "../Schedule/Schedule";
function Home (){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg={AboutImg}
            title="Your Voyage Your Life"
            text="Choose your Kazakhstan adventure."
            buttonText="Travel Plan"
            url={Schedule.name}
            btnClass="show"
            />
            <Destination />
            <Tour />
            <Footer/>
        </>
    )
}

export default Home;