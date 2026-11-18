/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import dc910Data from "../data/aircraft/dc-9-10.json";
import AircraftStatus from "../components/AircraftStatus.jsx";

function DC910StatusPage() {
    return (
        <div className="status-page">
            <AircraftStatus fleet={dc910Data.fleet} />
        </div>
    );
}

export default DC910StatusPage;