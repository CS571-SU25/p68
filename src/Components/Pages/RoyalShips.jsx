import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CruiseShipSummary from "./../CruiseShipSummary";

export default function RoyalShips(props) {
    const rData = [
        {name: "Grandeur of the Seas", tonnage: "73,817", guestCapacity: "1,992", crewCapacity: "760", yearBuilt: "1996", yearRef: "2024", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Grandeur_of_the_Seas_Feb_29_2024.jpg"},
        {name: "Enchantment of the Seas", tonnage: "82,910", guestCapacity: "2,252", crewCapacity: "852", yearBuilt: "1997", yearRef: "2021", rating: "4.0/5.0", img: "https://www.cruisemapper.com/images/ships/646-large-0ff39bbbf981ac0151d340c9aa40e63e.jpg"},
        {name: "Rhapsody of the Seas", tonnage: "78,878", guestCapacity: "1,998", crewCapacity: "768", yearBuilt: "1997", yearRef: "2022", rating: "3.5/5.0", img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/rhapsody/assets/rhapsody-of-the-seas-alaska-sailing-hero.jpg?$1440x600$"},
        {name: "Vision of the Seas", tonnage: "78,717", guestCapacity: "2,050", crewCapacity: "765", yearBuilt: "1998", yearRef: "2022", rating: "3.5/5.0", img: "https://www.cruisemapper.com/images/ships/612-large-f76a89f0cb91bc419542ce9fa43902dc.jpg"},
        {name: "Voyager of the Seas", tonnage: "138,194", guestCapacity: "3,114", crewCapacity: "1,176", yearBuilt: "1999", yearRef: "2019", rating: "4.5/5.0", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Voyager_of_the_seas_santorini.png/960px-Voyager_of_the_seas_santorini.png"},
        {name: "Explorer of the Seas", tonnage: "138,194", guestCapacity: "3,114", crewCapacity: "1,185", yearBuilt: "2000", yearRef: "2023",  rating: "4.5/5.0", img: "https://cruise.blog/sites/default/files/styles/desktop_2x/public/2023-08/Explorer-of-the-seas-departing-venice.jpg?itok=10h8qCzD"},
        {name: "Adventure of the Seas", tonnage: "138,193", guestCapacity: "3,114", crewCapacity: "1,185", yearBuilt: "2001", yearRef: "2024",  rating: "4.0/5.0", img: "https://a.storyblok.com/f/306333/1920x1080/94795d2116/adventureofthesea.jpg/m/1920x1080/filters:format(webp):quality(70)"},
        {name: "Navigator of the Seas", tonnage: "139,999", guestCapacity: "3,376", crewCapacity: "1,213", yearBuilt: "2002", yearRef: "2019", rating: "4.5/5.0", img: "https://www.royalcaribbeanpresscenter.com/media_photos/1655474745_RCI-NV-OOH-JD-032019-DP-1-Aerial-5782-RET-CMYK.jpg"},
        {name: "Mariner of the Seas", tonnage: "139,863", guestCapacity: "3,114", crewCapacity: "1,190", yearBuilt: "2003", yearRef: "2023", rating: "4.5/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Bahamas_Cruise_-_ship_exterior_-_June_2018_%283303%29.jpg"},
        {name: "Radiance of the Seas", tonnage: "90,090", guestCapacity: "2,143", crewCapacity: "894", yearBuilt: "2001", yearRef: "2024", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Radiance_of_the_Seas_-_Juneau%2C_AK.jpg"},
        {name: "Brilliance of the Seas", tonnage: "90,090", guestCapacity: "2,142", crewCapacity: "848", yearBuilt: "2002", yearRef: "2025", rating: "4.0/5.0", img: "https://www.sixsuitcasetravel.com/media/reviews/photos/original/50/04/d4/ship-18-1519661677.jpg"},
        {name: "Serenade of the Seas", tonnage: "90,090", guestCapacity: "2,142", crewCapacity: "870", yearBuilt: "2003", yearRef: "2022", rating: "4.5/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Serenade_of_the_Seas_Jan_28_2025.jpg"},
        {name: "Jewel of the Seas", tonnage: "90,090", guestCapacity: "2,112", crewCapacity: "852", yearBuilt: "2004", yearRef: "2024", rating: "3.5/5.0", img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ship/jewel-of-the-seas/jewel-of-the-seas-grenada-docked-harbor.jpg?$1440x600$"},
        {name: "Freedom of the Seas", tonnage: "156,271", guestCapacity: "3,782", crewCapacity: "1,365", yearBuilt: "2006", yearRef: "2020", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Freedom_of_the_Seas_at_Port_Miami_%28March_15%2C_2024%29.jpg"},
        {name: "Liberty of the Seas", tonnage: "155,889", guestCapacity: "3,798", crewCapacity: "1,360", yearBuilt: "2007", yearRef: "planned 2026", rating: "4.0/5.0", img: "https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_222_1280x960-01-rci_lb_liberty_drone_still004_1024x416_mobhdr.jpg"},
        {name: "Independence of the Seas", tonnage: "155,889", guestCapacity: "3,634", crewCapacity: "1,360", yearBuilt: "2008", yearRef: "2023", rating: "4.0/5.0", img: "https://img.cruisecritic.net/cms-sb/f/1005231/414dfa44f8/independence-of-the-seas_royal-caribbean-international_7644.jpg?auto=format&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.8.1"},
        {name: "Oasis of the Seas", tonnage: "226,838,", guestCapacity: "5,400,", crewCapacity: "2,200,", yearBuilt: "2009", yearRef: "2024", rating: "4.5/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Oasis_of_the_Seas.jpg/1200px-Oasis_of_the_Seas.jpg"},
        {name: "Allure of the Seas", tonnage: "225,282", guestCapacity: "5,492", crewCapacity: "2,384", yearBuilt: "2010", yearRef: "2025", rating: "5.0/5.0", img: "https://cruiseindustrynews.com/wp-content/uploads/2024/08/allure-of-the-seas.jpg"},
        {name: "Harmony of the Seas", tonnage: "226,963,", guestCapacity: "5,497", crewCapacity: "2,200", yearBuilt: "2016", yearRef: "planned 2026", rating: "4.5/5.0", img: "https://crew-center.com/sites/default/files/styles/ship_teaser_image/public/royal-caribbean-harmony-of-the-seas-cruise-ship.gif.webp?itok=gUpOOBPA"},
        {name: "Symphony of the Seas", tonnage: "228,081", guestCapacity: "5,518", crewCapacity: "2,200", yearBuilt: "2018", yearRef: "2023", rating: "4.5/5.0", img: "https://www.royalcaribbeanincentives.com/content/uploads/RCI_SY_Symphony_18_Aerials_BCN227R-1240x660_1-1240x660.jpg"},
        {name: "Wonder of the Seas", tonnage: "235,600", guestCapacity: "5,734", crewCapacity: "2,300", yearBuilt: "2022", yearRef: "N/A", rating: "5.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wonder_of_the_Seas_Jan_30_2025.jpg"},
        {name: "Utopia of the Seas", tonnage: "236,473,", guestCapacity: "5,668", crewCapacity: "2,290", yearBuilt: "2024", yearRef: "N/A", rating: "4.5/5.0", img: "https://www.puertoplatadr.com/cruiseports/wp-content/uploads/2025/02/utopia-of-the-seas-1200x900.jpg"},
        {name: "Quantum of the Seas", tonnage: "168,666", guestCapacity: "4,180", crewCapacity: "1,500", yearBuilt: "2014", yearRef: "2019", rating: "4.0/5.0", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Quantum_of_the_Seas_-_Wedel_04.jpg"},
        {name: "Anthem of the Seas", tonnage: "168,666", guestCapacity: "4,180", crewCapacity: "1,500", yearBuilt: "2015", yearRef: "2025", rating: "4.5/5.0", img: "https://www.costcotravel.com/content/shared/images/cruise/royalCaribbean/anthemOfTheSeas/anthemOfTheSeas.jpg"},
        {name: "Ovation of the Seas", tonnage: "168,666", guestCapacity: "4,180", crewCapacity: "1,300", yearBuilt: "2016", yearRef: "planned 2026", rating: "4.5/5.0", img: "https://supercruises.com/_next/image?url=https%3A%2F%2Fp.static.supercruises.com%2Fimages%2Frci-ovation-of-the-seas-exterior-d0108d.jpg&w=3840&q=75"},
        {name: "Spectrum of the Seas", tonnage: "169,379", guestCapacity: "4,246", crewCapacity: "1,551", yearBuilt: "2019", yearRef: "2024", rating: "-/5.0", img: "https://www.meyerwerft.de/en/schiffe/mwp/1240x530px/mwp_royal_carribean_spectrum_of_the_seas_1240x530_1240x530.jpg"},
        {name: "Odyssey of the Seas", tonnage: "167,704", guestCapacity: "4,200", crewCapacity: "1,612", yearBuilt: "2021", yearRef: "N/A", rating: "5.0/5.0", img: "https://cruiseradio.net/wp-content/uploads/2021/11/1623275356_OY21-AerialsCyprus242-scaled.jpg"},
        {name: "Icon of the Seas", tonnage: "248,663", guestCapacity: "5,610", crewCapacity: "2,350", yearBuilt: "2023", yearRef: "N/A", rating: "4.5/5.0", img: "https://www.lipcon.com/wp-content/uploads/2024/04/cruise-ship.jpeg"},
        {name: "Star of the Seas", tonnage: "248,663", guestCapacity: "5,610", crewCapacity: "2,350", yearBuilt: "2025", yearRef: "N/A", rating: "-/5.0", img: "https://www.shippax.com/backnet/media_archive/cache/1320088252c673979417ff4e56f591e5_1200x630.jpg"},
        {name: "Legend of the Seas", tonnage: "248,663", guestCapacity: "5,610", crewCapacity: "2,350", yearBuilt: "2026", yearRef: "N/A", rating: "-/5.0", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d274ad60-4335-4575-b4be-e137ef316038/diah93a-da13d515-d83d-428d-a443-17a0d3e67006.png/v1/fill/w_1240,h_530,q_80,strp/legend_of_the_seas__icon_class_cruise_ship__by_jackadamen_diah93a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMwIiwicGF0aCI6IlwvZlwvZDI3NGFkNjAtNDMzNS00NTc1LWI0YmUtZTEzN2VmMzE2MDM4XC9kaWFoOTNhLWRhMTNkNTE1LWQ4M2QtNDI4ZC1hNDQzLTE3YTBkM2U2NzAwNi5wbmciLCJ3aWR0aCI6Ijw9MTI0MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ATJul8r23rUBOpMjmeCOYvt_6-XDfsPoeNvatY2MBdQ"}
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
        <h1>Royal Caribbean Ships:</h1>
        <br/>
        <Row>
            {
                rData.map(rShip =>
                    <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {rShip.name}>
                        <CruiseShipSummary{...rShip} handleFavShip = {handleFavShip} handleUnfavShip = {handleUnfavShip}/>
                    </Col>
                )
            }
        </Row>
    </div>
}