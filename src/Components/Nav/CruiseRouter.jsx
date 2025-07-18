import { HashRouter, Route, Routes } from 'react-router'
import CruiseShipExplorer from "./../CruiseShipExplorer"
import CruiseHome from "./../Pages/CruiseHome"
import CarnivalShips from "./../Pages/CarnivalShips"
import NorwegianShips from "./../Pages/NorwegianShips"
import RoyalShips from "./../Pages/RoyalShips"
import FavoriteShips from "./../Pages/FavoriteShips"

function CruiseRouter() {
return <HashRouter>
  <Routes>
    <Route path = "/" element = {<CruiseShipExplorer />}>
      <Route index element = {<CruiseHome />} />
      <Route path = "/CarnivalShips" element = {<CarnivalShips />} />
      <Route path = "/NorwegianShips" element = {<NorwegianShips />} />
      <Route path = "/RoyalShips" element = {<RoyalShips />} />
      <Route path = "/FavoriteShips" element = {<FavoriteShips/>} />
    </Route>
  </Routes>
</HashRouter>
}

export default CruiseRouter
