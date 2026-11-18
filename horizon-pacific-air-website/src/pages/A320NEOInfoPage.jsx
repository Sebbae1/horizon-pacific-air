/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import a320neoData from "../data/aircraft/a320neo.json";
import AircraftInfo from "../components/AircraftInfo.jsx";

function A320NEOInfoPage(){
    return (
        <div className="info-page">
            <AircraftInfo aircraft={a320neoData.aircraft} />
        </div>
    );
}

export default A320NEOInfoPage;