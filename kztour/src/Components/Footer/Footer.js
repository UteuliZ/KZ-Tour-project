import "./Footer.css"
import Contact from "../../pages/Contact/Contact";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>KZ Tour</h1>
                    <p>Choose your favourite tour.</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/kz.tour/">
                        <i className="fa-brands fa-instagram-square"> </i>
                    </a>
                    <a href="https://wa.me/?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82">
                        <i className="fa-brands fa-whatsapp-square"> </i>
                    </a>
                    <a href="https://www.youtube.com">
                        <i className="fa-brands fa-youtube-square"> </i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="https://react.dev/">React</a>
                    <a href="https://ru.wikipedia.org/wiki/JavaScript">JavaScript</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/UteuliZ">GitHub</a>
                    <a href="https://www.instagram.com/instagram/">Instagram</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="https://wa.me/?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BB%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B.....">Troubleshooting</a>
                    <a href={Contact.name}>Contact us</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;