/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import b747800Data from "../data/aircraft/b747-800.json";
import AircraftStatus from "../components/AircraftStatus";

function B747800StatusPage(){
    return (
        <div className="status-page">
            <AircraftStatus fleet={b747800Data.fleet} />
        </div>
    );
}

export default B747800StatusPage;