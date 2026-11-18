/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import dc910Data from "../data/aircraft/dc-9-10.json";
import AircraftInfo from "../components/AircraftInfo.jsx";

function DC910InfoPage() {
    return (
        <div className="info-page">
            <AircraftInfo aircraft={dc910Data.aircraft} />
        </div>
    );
}

export default DC910InfoPage;