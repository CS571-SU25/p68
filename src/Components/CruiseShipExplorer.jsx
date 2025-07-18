import CruiseShipsNavBar from "./Nav/CruiseShipsNavBar"
import { Outlet } from "react-router";

export default function CruiseShipExplorer() {
    return <div>
        <CruiseShipsNavBar />
        <Outlet />
    </div>
}