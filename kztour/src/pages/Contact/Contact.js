import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutImg from "../../images/4.jpg";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

function Contact (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;