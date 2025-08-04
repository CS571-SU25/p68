import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CruiseShipSummary from "./../CruiseShipSummary";

export default function CarnivlShips(props) {
    const cData = [
        {name: "Carnival Elation", tonnage: "71,909", guestCapacity: "2,130", crewCapacity: "900", yearBuilt: "1998", yearRef: "2023", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/el/carnival-elation-mobile-hero-2.jpg"},
        {name: "Carnival Paradise", tonnage: "71,925", guestCapacity: "2,124", crewCapacity: "920", yearBuilt: "1998", yearRef: "2023", rating: "3.5/5.0", img: "https://www.cruisetimetables.com/pictures/carnival-paradise-cruise-ship.jpg"},
        {name: "Carnival Sunshine", tonnage: "103,881", guestCapacity: "3,002", crewCapacity: "1,040", yearBuilt: "1996", yearRef: "2025", rating: "4.0/5.0", img: "https://static.vesselfinder.net/ship-photo/9070058-308017000-d51c4aced44aeb1c259bc7708ee13f73/1?v1"},
        {name: "Carnival Sunrise", tonnage: "102,239", guestCapacity: "2,984", crewCapacity: "1,108", yearBuilt: "1999", yearRef: "2019", rating: "4.0/5.0", img: "https://a-us.storyblok.com/f/1005231/3840x2559/a83575f474/carnival-sunrise.jpg"},
        {name: "Carnival Radiance", tonnage: "102,232", guestCapacity: "2,984", crewCapacity: "1,108", yearBuilt: "2000", yearRef: "2024", rating: "4.5/5.0", img: "https://www.carnival.com/-/media/images/ships/rd/carnival-radiance-aerial-hero-mobile.jpg"},
        {name: "Carnival Adventure", tonnage: "108,865", guestCapacity: "2,600", crewCapacity: "1,100", yearBuilt: "2001", yearRef: "2025",  rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/aq/open-for-sale/carnival-adventure-hero-mobile.jpg"},
        {name: "Carnival Encounter", tonnage: "108,977", guestCapacity: "2,600", crewCapacity: "1,100", yearBuilt: "2002", yearRef: "2025",  rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/eq/open-for-sale/carnival-encounter-hero-mobile.jpg"},
        {name: "Carnival Spirit", tonnage: "85,920", guestCapacity: "2,124", crewCapacity: "930", yearBuilt: "2001", yearRef: "2025", rating: "4.5/5.0", img: "https://iprsoftwaremedia.com/412/files/20234/646754b7b3aed351511532f8_Carnival%20Spirit/Carnival%20Spirit_social.jpg"},
        {name: "Carnival Pride", tonnage: "86,071", guestCapacity: "2,124", crewCapacity: "930", yearBuilt: "2001", yearRef: "2023", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/pr/carnival-pride-mobile-hero-2.jpg"},
        {name: "Carnival Legend", tonnage: "85,942", guestCapacity: "2,124", crewCapacity: "930", yearBuilt: "2002", yearRef: "2024", rating: "4.0/5.0", img: "https://iprsoftwaremedia.com/412/files/20234/Carnival%20Legend.jpg"},
        {name: "Carnival Miracle", tonnage: "85,942", guestCapacity: "2,124", crewCapacity: "930", yearBuilt: "2004", yearRef: "2025", rating: "4.0/5.0", img: "https://img.cruisecritic.net/cms-sb/f/1005231/4547x2273/d68578b6a3/carnival-miracle-lisbon.jpg?auto=format&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.8.1"},
        {name: "Carnival Conquest", tonnage: "110,480", guestCapacity: "2,980", crewCapacity: "1,150", yearBuilt: "2002", yearRef: "2022", rating: "4.0/5.0", img: "https://a-us.storyblok.com/f/1005231/6000x4000/65c1e63bd9/carnivalconquest_mia-02931.jpg"},
        {name: "Carnival Glory", tonnage: "110,000", guestCapacity: "2,980", crewCapacity: "1,150", yearBuilt: "2003", yearRef: "2024", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/gl/carnival-glory-mobile.jpg"},
        {name: "Carnival Valor", tonnage: "110,438", guestCapacity: "2,980", crewCapacity: "1,180", yearBuilt: "2004", yearRef: "2025", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/va/carnival-valor-mobile.jpg"},
        {name: "Carnival Liberty", tonnage: "110,428", guestCapacity: "2,980", crewCapacity: "1,160", yearBuilt: "2005", yearRef: "2021",  rating: "4.5/5.0", img: "https://www.cruisemapper.com/images/ships/568-large-dd458505749b2941217ddd59394240e8.jpg"},
        {name: "Carnival Freedom", tonnage: "110,556", guestCapacity: "2,980", crewCapacity: "1,150", yearBuilt: "2007", yearRef: "2023", rating: "4.5/5.0", img: "https://www.carnival.com/-/media/images/ships/fd/carnival-freedom-mobile.jpg"},
        {name: "Carnival Splendor", tonnage: "113,573", guestCapacity: "3,012", crewCapacity: "1,150", yearBuilt: "2008", yearRef: "2024", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/sl/carnival-splendor-mobile-4.jpg"},
        {name: "Carnival Luminosa", tonnage: "92,720", guestCapacity: "2,260", crewCapacity: "926", yearBuilt: "2009", yearRef: "2022", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/lm/carnival-luminosa-open-for-sale-hero-mobile.jpg"},
        {name: "Carnival Dream", tonnage: "128,251", guestCapacity: "3,646", crewCapacity: "1,367", yearBuilt: "2009", yearRef: "2021", rating: "4.5/5.0", img: "https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_264_1280x960-ccl-dream_1024x416_mobhdr.jpg"},
        {name: "Carnival Magic", tonnage: "128,048", guestCapacity: "3,690", crewCapacity: "1,367", yearBuilt: "2011", yearRef: "2021", rating: "4.0/5.0", img: "https://iprsoftwaremedia.com/412/files/20234/Carnival%20Magic.jpg"},
        {name: "Carnival Breeze", tonnage: "128,052", guestCapacity: "3,690", crewCapacity: "1,386", yearBuilt: "2012", yearRef: "2017", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/br/carnival-breeze-mobile.jpg"},
        {name: "Carnival Vista", tonnage: "133,596", guestCapacity: "3,934", crewCapacity: "1,450", yearBuilt: "2016", yearRef: "2021", rating: "4.5/5.0", img: "https://www.carnival.com/-/media/images/ships/vs/carnival-vista-ship-aerial-mobile2.jpg"},
        {name: "Carnival Horizon", tonnage: "133,596", guestCapacity: "3,960", crewCapacity: "1,450", yearBuilt: "2018", yearRef: "2024", rating: "4.0/5.0", img: "https://www.carnival.com/-/media/images/ships/hz/carnival-horizon-ship-3.jpg"},
        {name: "Carnival Panorama", tonnage: "133,868", guestCapacity: "4,008", crewCapacity: "1,450", yearBuilt: "2019", yearRef: "2024", rating: "4.5/5.0", img: "https://foreverkaren.com/wp-content/uploads/2025/01/Carnival-Panorama-cruise-ship.jpg"},
        {name: "Carnival Venezia", tonnage: "135,225", guestCapacity: "4,208", crewCapacity: "1,424", yearBuilt: "2019", yearRef: "2023", rating: "4.5/5.0", img: "https://www.puertoplatadr.com/cruiseports/wp-content/uploads/2025/02/carnival_venezia-2.jpg"},
        {name: "Carnival Firenze", tonnage: "135,156", guestCapacity: "4,126", crewCapacity: "1,424", yearBuilt: "2020", yearRef: "2024", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Carnival_Firenze_at_Puerto_Vallarta_Oct_2024.png"},
        {name: "Carnival Mardi Gras", tonnage: "181,808", guestCapacity: "5,282", crewCapacity: "1,745", yearBuilt: "2021", yearRef: "2025", rating: "5.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mardi_Gras_ship_22-12-2020_front_view.jpg"},
        {name: "Carnival Celebration", tonnage: "183,521", guestCapacity: "5,282", crewCapacity: "1,735", yearBuilt: "2022", yearRef: "N/A", rating: "4.0/5.0", img: "https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_703_1280x960-cl_celebration_mv22_aerialsmia111_1024x416_mobhdr.jpg"},
        {name: "Carnival Jubilee", tonnage: "183,521", guestCapacity: "5,282", crewCapacity: "1,735", yearBuilt: "2023", yearRef: "N/A", rating: "4.0/5.0", img: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/22/USAT/72012597007-carnival-jubilee.jpeg"}
    ]

    const [favShips, setFavShips] = useState(JSON.parse(sessionStorage.getItem("favShips")) || []);

    useEffect(() => {
        sessionStorage.setItem("favShips", JSON.stringify(favShips));
    })

    const handleFavShip = (ship) => {
        setFavShips([...favShips, ship]);
        window.location.reload();
        alert(`${ship.name} has been added to your Favorites!`);
    }

    const handleUnfavShip = (ship) => {
        const newFavShips = favShips.filter(s => s.name !== ship.name);
        setFavShips(newFavShips);
        window.location.reload();
        alert(`${ship.name} has been removed from your Favorites!`);
    }
    return <div>
        <h1>Carnival Cruise Line Ships:</h1>
        <br/>
        <Row>
            {
                cData.map(cShip =>
                    <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {cShip.name}>
                        <CruiseShipSummary{...cShip} handleFavShip = {handleFavShip} handleUnfavShip = {handleUnfavShip}/>
                    </Col>
                )
            }
        </Row>
    </div>
}