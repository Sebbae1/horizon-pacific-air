/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import a320neoData from "../data/aircraft/a320neo.json";
import AircraftStatus from "../components/AircraftStatus.jsx";

function A320NEOStatusPage(){
    return (
        <div className="status-page">
            <AircraftStatus fleet={a320neoData.fleet} />
        </div>
    );
}

export default A320NEOStatusPage;