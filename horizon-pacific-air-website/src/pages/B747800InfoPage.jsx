/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import b747800Data from "../data/aircraft/b747-800.json";
import AircraftInfo from "../components/AircraftInfo.jsx";

function B747800InfoPage(){
    return (
        <div className="info-page">
            <AircraftInfo aircraft={b747800Data.aircraft} />
        </div>
    );
}

export default B747800InfoPage;