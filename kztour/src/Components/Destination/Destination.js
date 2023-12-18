import Mountain1 from "../../images/Mountain1.jpg";
import Mountain2 from "../../images/Kolsay.jpg";
import Charyn from "../../images/charyn.jpg";
import Charyn2 from "../../images/charyn2.jpg";
import Lake from "../../images/BAL.jpeg";
import Lake2 from "../../images/bal2.jpeg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Leading Trends</h1>
            <p>Let's enjoy the beauty of Kazakhstan together</p>

            <DestinationData
                className="first-des"
            heading="Kolsay Lakes National Park"
            text="There are three emerald-green lakes of unimaginable beauty in the foothills of Kengei-Alatau. It is here that a paradise for lovers of pristine nature is located – lakes in a wonderful forest environment can be found just three hundred kilometers from Almaty. Trout are found in the cold mountain water. Kolsai lakes are called the pearl of the Northern Tien Shan, they are very deep - the deepest place is 80 meters. All around is a coniferous forest belt, smoothly turning into high–altitude alpine meadows. You can easily meet a snow leopard, a bear or a lynx here. It is a great place for camping, fishing, boating and horseback riding."
            img1={Mountain1}
            img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Charyn Canyon, Almaty"
                text="The amazing creation of the Paleogene is located 200 km from Almaty. The second name of the Charyn Canyon is the Valley of Castles. The millennial weathering of sedimentary rocks has led to the appearance of rocks, towers and columns, turning the canyon into one of the most picturesque places in Kazakhstan. The age of this natural monument is about 12 million years old. Many tourists compare this place to the American Grand Canyon."
                img1={Charyn}
                img2={Charyn2}
            />

            <DestinationData
                className="first-des2"
                heading="Big Almaty Lake"
                text="The Big Almaty Lake, or BAO, is a real diamond of the Trans-Ili Alatau ridge. It is located 30 km from Almaty in the Big Almaty Gorge on the territory of the Ile-Alatau National Park. The height of BAO above sea level of this lake is about 2500 m. The lake is ringed by high mountains and has a length of about 1600 m in length and from 750 – 1000 m in width, with a maximum depth of about 40 meters."
                img1={Lake}
                img2={Lake2}
            />
        </div>
    );
};

export default Destination