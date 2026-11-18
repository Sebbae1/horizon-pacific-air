/*
    Creator: Sebastian Jaculbe
    Created: May 24th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import mc21400Data from "../data/aircraft/mc-21-400.json";
import AircraftInfo from "../components/AircraftInfo.jsx";

function MC21400InfoPage() {
    return (
        <div className="info-page">
            <AircraftInfo aircraft={mc21400Data.aircraft} />
        </div>
    );
}

export default MC21400InfoPage;