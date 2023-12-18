import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutImg from "../../images/5.jpg";
import Footer from "../../Components/Footer/Footer";
import Tour from "../../Components/Tour/Tour";

function Service (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                btnClass="hide"
            />
            <Tour/>
            <Footer/>
        </>
    )
}

export default Service;