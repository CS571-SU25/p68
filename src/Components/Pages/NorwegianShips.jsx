import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CruiseShipSummary from "./../CruiseShipSummary";

export default function NorwegianShips(props) {
    const nData = [
        {name: "Norwegian Spirit", tonnage: "75,904", guestCapacity: "1,972", crewCapacity: "912", yearBuilt: "1998", yearRef: "2022", rating: "4.5/5.0", img: "https://www.ncl.com/sites/default/files/700x475_Spirit_Aerial_09152022.jpg"},
        {name: "Norwegian Sky", tonnage: "77,104", guestCapacity: "1,944", crewCapacity: "899", yearBuilt: "1999", yearRef: "2024", rating: "3.5/5.0", img: "https://img.cruisecritic.net/cms-sb/f/1005231/f9cc9ec784/image_2530.jpg?auto=format&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.8.1"},
        {name: "Norwegian Sun", tonnage: "78,309", guestCapacity: "1,878", crewCapacity: "906", yearBuilt: "2001", yearRef: "2021", rating: "4.0/5.0", img: "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/cruise-ship/NCL/NCL020/NCL020_EXT_Norwegian-Sun_Z6DE3E.jpg?tr=w-1200%2Cfo-auto"},
        {name: "Norwegian Star", tonnage: "91,740", guestCapacity: "2,298", crewCapacity: "1,031", yearBuilt: "2001", yearRef: "2021", rating: "4.0/5.0", img: "https://www.ncl.com/sites/default/files/hero-mobile-star.jpg"},
        {name: "Norwegian Dawn", tonnage: "92,250", guestCapacity: "2,290", crewCapacity: "1,032", yearBuilt: "2002", yearRef: "2024", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Norwegian_Dawn_Leaving_Boston_Harbor_%28cropped%29.jpg"},
        {name: "Pride of America", tonnage: "80,439", guestCapacity: "2,180", crewCapacity: "927", yearBuilt: "2005", yearRef: "2025", rating: "4.5/5.0", img: "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/cruise-ship/NCL/NCL026/NCL026_EXT_Pride-of-America_Z8EC78.jpg?tr=w-1200%2Cfo-auto"},
        {name: "Norwegian Jewel", tonnage: "93,502", guestCapacity: "2,330", crewCapacity: "1,069", yearBuilt: "2005", yearRef: "2022", rating: "4.0/5.0", img: "https://www.ncl.com/sites/default/files/jewel-ship-mobile-2018.jpg"},
        {name: "Norwegian Jade", tonnage: "93,558", guestCapacity: "2,352", crewCapacity: "1,037", yearBuilt: "2006", yearRef: "2022", rating: "4.0/5.0", img: "https://img.cruisecritic.net/cms-sb/f/1005231/3be90a6e76/norwegian-jade_orientation-left_bow_sea_2526.jpg?auto=format&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.8.1"},
        {name: "Norwegian Pearl", tonnage: "93,530", guestCapacity: "2,344", crewCapacity: "1,072", yearBuilt: "2006", yearRef: "2021", rating: "4.0/5.0", img: "https://www.ncl.com/sites/default/files/Hero-Pearl-Mobile-2018.jpg"},
        {name: "Norwegian Gem", tonnage: "93,530", guestCapacity: "2,344", crewCapacity: "1,070", yearBuilt: "2007", yearRef: "2022", rating: "4.0/5.0", img: "https://www.costcotravel.com/content/shared/images/cruise/norwegianCruiseLine/norwegianGem/norwegianGem.jpg"},
        {name:"Norwegian Epic", tonnage: "155,873", guestCapacity: "4,070", crewCapacity: "1,724", yearBuilt: "2010", yearRef: "2025", rating: "3.5/5.0", img: "https://www.ncl.com/sites/default/files/epic-ship-mobile-2018.jpg"},
        {name: "Norwegian Breakaway", tonnage: "145,655", guestCapacity: "3,903", crewCapacity: "1,657", yearBuilt: "2013", yearRef: "2025", rating: "4.5/5.0", img: "https://www.cruisemapper.com/images/ships/584-large-f5deaeeae1538fb6c45901d524ee2f98.jpg"},
        {name: "Norwegian Getaway", tonnage: "145,655", guestCapacity: "3,903", crewCapacity: "1,646", yearBuilt: "2014", yearRef: "2024", rating: "4.5/5.0", img: "https://www.ncl.com/sites/default/files/Getaway-hero-mobile.jpg"},
        {name: "Norwegian Escape", tonnage: "164,998", guestCapacity: "4,218", crewCapacity: "1,733", yearBuilt: "2015", yearRef: "2022", rating: "4.0/5.0", img: "https://www.ncl.com/sites/default/files/Hero-Escape-Mobile-2018.jpg"},
        {name: "Norwegian Joy", tonnage: "167,725", guestCapacity: "3,776", crewCapacity: "1,821", yearBuilt: "2017", yearRef: "2024", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Norwegian_Joy_at_kochi_new_port_%28cropped%29.jpg"},
        {name: "Norwegian Bliss", tonnage: "168,028", guestCapacity: "4,010", crewCapacity: "1,716", yearBuilt: "2018", yearRef: "2025", rating: "4.0/5.0", img: "https://www.ncl.com/sites/default/files/HERO_Bliss_072618.jpg"},
        {name: "Norwegian Encore", tonnage: "169,116", guestCapacity: "3,958", crewCapacity: "1,735", yearBuilt: "2019", yearRef:"2024", rating: "4.5/5.0", img: "https://img.cruisecritic.net/cms-sb/f/1005231/7d87867cbe/norwegian-cruise-line_norwegian-encore_18718987.jpg?auto=format&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.8.1"},
        {name: "Norwegian Prima", tonnage: "143,535", guestCapacity: "3,099", crewCapacity: "1,506", yearBuilt: "2022", yearRef: "N/A", rating: "4.5/5.0", img: "https://www.cruisemapper.com/images/ships/2216-e829203b12e.jpg"},
        {name: "Norwegian Viva", tonnage: "142,500", guestCapacity: "3,195", crewCapacity: "1,506", yearBuilt: "2023", yearRef: "N/A", rating: "4.5/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Norwegian_Viva_Mar_1_2024.jpg"},
        {name: "Norwegian Aqua", tonnage: "156,300", guestCapacity: "3,571", crewCapacity: "1,597", yearBuilt: "2025", yearRef: "N/A", rating: "4.5/5.0", img: "https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/Content-Travel_Types/Cruise/Features/NorwegianAquaReview_Hero/Review-Norwegian-Aqua.jpg?tr=w-1008%2Ch-567%2Cfo-auto"},
        {name: "Norwegian Luna", tonnage: "156,300", guestCapacity: "3,571", crewCapacity: "1,597", yearBuilt: "2026", yearRef: "N/A", rating: "-/5.0", img: "https://filecache.multivu.com/mr5vpo_multivu/181610/9239153-Norwegian%20Luna%20Aerial%20-%20Rendering%20Madeline%20J%20DalPonte.jpg"}
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
        <h1>Norwegian Cruise Line Ships:</h1>
        <br/>
        <Row>
            {
                nData.map(nShip =>
                    <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {nShip.name}>
                        <CruiseShipSummary{...nShip} handleFavShip = {handleFavShip} handleUnfavShip = {handleUnfavShip}/>
                    </Col>
                )
            }
        </Row>
    </div>
}