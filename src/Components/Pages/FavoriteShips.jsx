import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CruiseShipSummary from "./../CruiseShipSummary";

export default function FavoriteShips(props) {
    const [favShips, setFavShips] = useState(JSON.parse(sessionStorage.getItem("favShips")) || []);

    useEffect(() => {
        sessionStorage.setItem("favShips", JSON.stringify(favShips));
    })

    const handleUnfavShip = (ship) => {
        const newFavShips = favShips.filter(s => s.name !== ship.name);
        setFavShips(newFavShips);
        window.location.reload();
        alert(`${ship.name} has been removed from your Favorites!`);
    }

    return <div>
        <h1>Favorite Cruise Ships:</h1>
        <br/>
        { favShips.length === 0 ? <p>You currently don't have any ships favorited</p> : <></>}
        { favShips.length === 0 ? 
        <img src = {"https://yt3.googleusercontent.com/tyhaGNZVOXndyO_mLpvHQLYGh8yCzN0IsjirIlesD4qprE11mCNygBJELps59wwrbVMhPYa4rA=s900-c-k-c0x00ffffff-no-rj"} alt = {"image of Carnival Cruise Line Logo"} width = {"33.3%"} height = {650} /> : <></>}
        { favShips.length === 0 ?  
        <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRewWYnNtgl1H5UoD1vq8Aneb6lmX56JtQJw&s"} alt = {"image of Norwegian Cruise Line Logo"} width = {"33.3%"} height = {650}/> : <></>}
        { favShips.length === 0 ?  <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdwEyvw1gDpjSai0kdddSqArj93C0UaFS5g&s"} alt = {"image of Royal Caribbean Logo"} width = {"33.3%"} height = {650}/> : <></>}

        <Row>
            {
                favShips.map(ship =>
                    <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {ship.name}>
                        <CruiseShipSummary{...ship} handleUnfavShip = {handleUnfavShip}/>
                    </Col>
                )
            }
        </Row>
    </div>
}