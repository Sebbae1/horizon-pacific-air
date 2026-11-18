/*
    Creator: Sebastian Jaculbe
    Created: June 9th, 2026
    Updated: June 10th, 2026
    Version 0.3
*/

import b777300erData from "../data/aircraft/b777-300er.json";
import AircraftStatus from "../components/AircraftStatus.jsx";

function B777300ERStatusPage() {
    return (
        <div>
            <AircraftStatus fleet={b777300erData.fleet} />
        </div>
    );
}

export default B777300ERStatusPage;