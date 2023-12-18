import "./Info.css";

function Info (){
    return(
        <div className="info-container">
            <h1>Our History</h1>
            <p>KZ Tour was founded in 2010 with a passion for showcasing the rich cultural tapestry and breathtaking landscapes of Kazakhstan. Over the years, we have evolved into a premier travel agency, committed to providing unparalleled experiences that capture the essence of our diverse and vibrant nation.</p>

            <h1>Our Mission</h1>
            <p>At KZ Tour, our mission is to facilitate memorable journeys by offering meticulously crafted itineraries, personalized service, and a deep commitment to responsible tourism. We aim to be the gateway for travelers seeking authentic encounters and a profound connection with the wonders of Kazakhstan.</p>

            <h1>Our Vision</h1>
            <p>We envision KZ Tour as the foremost ambassador for Kazakhstan's tourism, fostering a global community of explorers who appreciate the beauty, hospitality, and untold stories of our nation. Through sustainable practices and innovative travel solutions, we aspire to be the catalyst for transformative and enriching travel experiences.</p>

            <div className="team-info">
                <h2>Our Team</h2>
                <table className="info-table">
                    <thead className="th-table">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody className="td-table">
                    <tr>
                        <td>Kairat Toreali</td>
                        <td>CEO</td>
                        <td>kairat@travelkz.com</td>
                    </tr>
                    <tr>
                        <td>Toregali Nurtas</td>
                        <td>Sales Manager</td>
                        <td>ttt@travelkz.com</td>
                    </tr>
                    <tr>
                        <td>Meirambek Maigaziyev</td>
                        <td>Tour Guide</td>
                        <td>muzart@travelkz.com</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Mo Say</td>
                        <td>Accountant</td>
                        <td>mosay@travelkz.com</td>
                    </tr>
                    <tr>
                        <td>Marketing Specialist</td>
                        <td>mosay.market@travelkz.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Info;