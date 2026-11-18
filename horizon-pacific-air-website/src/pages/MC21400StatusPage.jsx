/*
    Creator: Sebastian Jaculbe
    Created: May 24th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import mc21400Data from "../data/aircraft/mc-21-400.json";
import AicraftStatus from "../components/AircraftStatus.jsx";

function MC21400StatusPage(){
    return (
        <div className="status-page">
            <AicraftStatus fleet={mc21400Data.fleet} />
        </div>
    );
}

export default MC21400StatusPage;