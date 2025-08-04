import { useEffect, useState } from "react";

export default function CruiseShipSummary(props) {

    const [favShips, setFavShips] = useState(JSON.parse(sessionStorage.getItem("favShips")) || []);

    useEffect(() => {
        sessionStorage.setItem("favShips", JSON.stringify(favShips));
    })

    const inFavShips = favShips.some(ship => ship.name === props.name);

    return <div>
        <h2>{props.name}</h2>
        <img src = {props.img} alt = {`image of ${props.name}`} width = {300} height = {300}></img>
        <p><b>Gross Tonnage: </b>{props.tonnage}</p>
        <p><b>Guest Capacity: </b>{props.guestCapacity}</p>
        <p><b>Crew Capacity: </b>{props.crewCapacity}</p>
        <p><b>Year Built: </b>{props.yearBuilt}</p>
        <p><b>Most Recently Refurbished: </b>{props.yearRef}</p>
        <p><b>Cruise Critic Rating: </b>{props.rating}</p>
        {
            inFavShips ? 
            <button onClick={() => props.handleUnfavShip(props)}>Unfavorite</button> 
            : 
            <button onClick={() => props.handleFavShip(props)}>Favorite</button>
        }
    </div>
}