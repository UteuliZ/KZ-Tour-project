import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutImg from "../../images/calendar.jpg";
import Footer from "../../Components/Footer/Footer";
import Calendar from "../../Components/Calendar/Calendar";

function Schedule (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Schedule"
                btnClass="hide"
            />
            <Calendar/>
            <Footer/>
        </>
    )
}

export default Schedule;