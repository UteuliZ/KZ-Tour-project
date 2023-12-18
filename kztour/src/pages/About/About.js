import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutImg from "../../images/1.jpg"
import Footer from "../../Components/Footer/Footer";
import Info from "../../Components/Info/Info"
function About (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                btnClass="hide"
            />
            <Info/>
            <Footer/>
        </>
    )
}

export default About;