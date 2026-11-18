/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import b777300erData from "../data/aircraft/b777-300er.json";
import AircraftInfo from "../components/AircraftInfo.jsx";

function B777300ERInfoPage(){
    return (
        <div className="info-page">
            <AircraftInfo aircraft={b777300erData.aircraft} />
        </div> 
    );
}

export default B777300ERInfoPage;