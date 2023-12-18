import "./Tour.css"
import TourData from "./TourData";
import Tour1 from "../../images/tour1.jpg";
import Tour2 from "../../images/tour2.jpg";
import Tour3 from "../../images/tour3.jpeg";
function Tour(){
    return(
        <div className="tour">
            <h1>Upcoming Tours</h1>
            <p>You can enjoy wonderful places with 2gis.</p>
            <div className="tourcard">
                <TourData
                    image={Tour1}
                    heading="Tour in Mangystau"
                    text="The Bozzhyra tract is a chain of remnant mountains of various shapes located at the bottom of a canyon in the western part of the Ustyurt plateau. Isolated mountain ranges in the form of fangs, standing at the entrance, became the hallmark of the tract."
                />

                <TourData
                    image={Tour2}
                    heading="Tour in Kazakh Switzerland"
                    text="Borovoye is a real oasis in the middle of the Kazakh steppe. This amazing place is located on the territory of the Burabai Park. The resort attracts guests with pristine nature, clean air, lakes, picturesque mountain peaks, and greenery of coniferous forests. Locals call this corner 'Kazakh Switzerland.'"
                />

                <TourData
                    image={Tour3}
                    heading="Tour in Turkestan"
                    text="Turkestan is one of the oldest cities in Kazakhstan. It holds a special place among the Turkic peoples. Buildings from the time of Tamerlane have been preserved here, and historical sites have been included in the UNESCO Cultural Heritage list."
                />
            </div>
        </div>
    )
}

export default Tour;