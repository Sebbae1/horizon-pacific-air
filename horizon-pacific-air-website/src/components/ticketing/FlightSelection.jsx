{/*
    Creator: Sebastian Jaculbe
    Created: September 7th, 2026
    Updated: September 7th, 2026
    Version 0.3
*/}

{/*
    Horizon Pacific Air
    Flight Selection Component

    Purpose:
    Display the flight selected by the passenger
    before continuing to passenger information.
*/}

import airports from "../../data/airports.json";
import "../../styles/ticketing/style-flight-selection.css";

function FlightSelection({
    flight,
    searchData,
    onBack,
    onContinue
}) {

    const route = flight.route;

    const departureAirport = airports.find(
        airport =>
            airport.iata === searchData.departure
    );

    const destinationAirport = airports.find(
        airport =>
            airport.iata === searchData.destination
    );

    const cabinName =
        searchData.cabin.charAt(0).toUpperCase() +
        searchData.cabin.slice(1);

    const price =
        route.ticketPricing[searchData.cabin];

    const passengerCount =
        Number(searchData.adults);

    const totalPrice =
        price * passengerCount;

    return (
        <section className="flight-selection">

            <div className="flight-selection-header">

                <button
                    type="button"
                    className="back-to-results-button"
                    onClick={onBack}
                >
                    ← Back to Flights
                </button>

                <h3>
                    Selected Flight
                </h3>

                <p>
                    Review your flight before
                    continuing.
                </p>

            </div>

            <div className="selected-flight-card">

                <div className="selected-flight-top">

                    <div className="selected-flight-airline">
                        <span>
                            Horizon Pacific Air
                        </span>

                        <strong>
                            {flight.flightNumber}
                        </strong>
                    </div>

                    <div className="selected-flight-status">
                        {flight.status.flightStatus}
                    </div>

                </div>

                <div className="selected-flight-route">

                    <div className="selected-airport">

                        <strong>
                            {searchData.departure}
                        </strong>

                        <span>
                            {departureAirport?.city}
                        </span>

                        <small>
                            {departureAirport?.name}
                        </small>

                    </div>

                    <div className="selected-flight-duration">

                        <span>
                            {route.routeInfo.flightTimeMins} min
                        </span>

                        <div>
                            ─────────────────
                        </div>

                    </div>

                    <div className="selected-airport">

                        <strong>
                            {searchData.destination}
                        </strong>

                        <span>
                            {destinationAirport?.city}
                        </span>

                        <small>
                            {destinationAirport?.name}
                        </small>

                    </div>

                </div>

                <div className="selected-flight-details">

                    <div className="selection-detail">

                        <span>
                            Aircraft
                        </span>

                        <strong>
                            {flight.aircraft.type}
                        </strong>

                    </div>

                    <div className="selection-detail">

                        <span>
                            Registration
                        </span>

                        <strong>
                            {flight.aircraft.registration}
                        </strong>

                    </div>

                    <div className="selection-detail">

                        <span>
                            Distance
                        </span>

                        <strong>
                            {route.routeInfo.distanceKm.toLocaleString()}
                            {" km"}
                        </strong>

                    </div>

                    <div className="selection-detail">

                        <span>
                            Cabin
                        </span>

                        <strong>
                            {cabinName}
                        </strong>

                    </div>

                </div>

            </div>

            <div className="selection-price-section">

                <div className="selection-price-details">

                    <span>
                        {passengerCount} passenger
                        {passengerCount !== 1 ? "s" : ""}
                    </span>

                    <strong>
                        ${price.toLocaleString()}
                    </strong>

                    <small>
                        per passenger
                    </small>

                </div>

                <div className="selection-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        ${totalPrice.toLocaleString()}
                    </strong>

                    <small>
                        USD
                    </small>

                </div>

            </div>

            <div className="selection-actions">

                <button
                    type="button"
                    className="continue-button"
                    onClick={onContinue}>
                    Continue
                </button>

            </div>

        </section>
    );
}

export default FlightSelection;