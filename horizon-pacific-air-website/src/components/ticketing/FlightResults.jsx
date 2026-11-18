{/*
    Creator: Sebastian Jaculbe
    Created: September 7th, 2026
    Updated: September 7th, 2026
    Version 0.3
*/}

{/*
    Horizon Pacific Air
    Flight Results Component

    Purpose:
    Display flights matching the user's search criteria.
*/}

import { useMemo } from "react";
import flightNetwork from "../../data/flightNetwork.json";
import flightSchedule from "../../data/flightSchedule.json";
import airports from "../../data/airports.json";
import "../../styles/ticketing/style-flight-results.css";

function FlightResults({ searchData, tripType, onSelectFlight }) {

    const results = useMemo(() => {

        if (!searchData.departure || !searchData.destination) {
            return [];
        }

        const routeCode =
            `${searchData.departure}-${searchData.destination}`;

        /*
            Find the route in flightNetwork.json
        */
        const route = flightNetwork.find(
            flight =>
                flight.routeCode === routeCode &&
                flight.active === true
        );

        if (!route) {
            return [];
        }

        /*
            Find all scheduled flights associated
            with the selected route.
        */
        const scheduledFlights = flightSchedule.filter(
            flight =>
                flight.routeCode === routeCode &&
                flight.status.flightStatus !== "Cancelled"
        );

        /*
            Combine route information with
            individual scheduled flights.
        */
        return scheduledFlights.map(schedule => ({
            ...schedule,
            route
        }));

    }, [searchData.departure, searchData.destination]);

    if (!searchData.departure || !searchData.destination) {
        return null;
    }

    const departureAirport = airports.find(
        airport => airport.iata === searchData.departure
    );

    const destinationAirport = airports.find(
        airport => airport.iata === searchData.destination
    );

    return (
        <section className="flight-results">

            <div className="flight-results-header">

                <div>
                    <h3>Available Flights</h3>

                    <p>
                        {departureAirport?.city} ({searchData.departure})
                        {" → "}
                        {destinationAirport?.city} ({searchData.destination})
                    </p>
                </div>

                <span className="trip-type-label">
                    {tripType === "roundTrip"
                        ? "Round Trip"
                        : "One Way"}
                </span>

            </div>

            {results.length === 0 ? (

                <div className="no-flight-results">
                    <h4>No flights found</h4>

                    <p>
                        We could not find an available Horizon Pacific Air
                        flight for this route.
                    </p>
                </div>

            ) : (

                <div className="flight-results-list">

                    {results.map(flight => {

                        const route = flight.route;

                        const cabinAvailable =
                            route.cabins[searchData.cabin];

                        if (!cabinAvailable) {
                            return null;
                        }

                        const price =
                            route.ticketPricing[searchData.cabin];

                        return (
                            <article
                                className="flight-card"
                                key={flight.flightId}
                            >

                                <div className="flight-card-main">

                                    <div className="flight-identification">

                                        <span className="flight-number">
                                            {flight.flightNumber}
                                        </span>

                                        <span className="flight-status">
                                            {flight.status.flightStatus}
                                        </span>

                                    </div>

                                    <div className="flight-route">

                                        <div className="airport">
                                            <strong>
                                                {searchData.departure}
                                            </strong>

                                            <span>
                                                {departureAirport?.city}
                                            </span>
                                        </div>

                                        <div className="flight-duration">

                                            <span>
                                                {route.routeInfo.flightTimeMins}
                                                {" min"}
                                            </span>

                                            <div className="flight-line">
                                                ─────────
                                            </div>

                                            {route.notes?.technicalStop && (
                                                <small>
                                                    Technical stop
                                                </small>
                                            )}

                                        </div>

                                        <div className="airport">
                                            <strong>
                                                {searchData.destination}
                                            </strong>

                                            <span>
                                                {destinationAirport?.city}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div className="flight-card-details">

                                    <div>
                                        <span>Aircraft</span>

                                        <strong>
                                            {flight.aircraft.type}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Registration</span>

                                        <strong>
                                            {flight.aircraft.registration}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Cabin</span>

                                        <strong>
                                            {searchData.cabin
                                                .charAt(0)
                                                .toUpperCase() +
                                                searchData.cabin.slice(1)}
                                        </strong>
                                    </div>

                                </div>

                                <div className="flight-card-price">

                                    <span>
                                        {route.ticketPricing.currency}
                                    </span>

                                    <strong>
                                        ${price.toLocaleString()}
                                    </strong>

                                    <small>
                                        per passenger
                                    </small>

                                    <button
                                        type="button"
                                        className="select-flight-button"
                                        onClick={() => onSelectFlight(flight) }
                                    >
                                        Select Flight
                                    </button>

                                </div>

                            </article>
                        );
                    })}

                </div>
            )}

        </section>
    );
}

export default FlightResults;