{/*
    Creator: Sebastian Jaculbe
    Created: September 7th, 2026
    Updated: September 7th, 2026
    Version 0.3
*/}

import { useState } from "react";
import airports from "../../data/airports.json";
import "../../styles/ticketing/style-flight-search.css";

function FlightSearch({ onSearch }) {

    const [tripType, setTripType] = useState("roundTrip");

    const [searchData, setSearchData] = useState({
        departure: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        adults: 1,
        cabin: "economy"
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setSearchData(previousData => ({
            ...previousData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        onSearch({
            tripType,
            ...searchData
        });
    }

    return (
        <div className="flight-search">
            <div className="flight-search-header">
                <h3>Search Flights</h3>
            </div>
            <div className="trip-type">
                <button
                    type="button"
                    className={tripType === "roundTrip" ? "active" : ""}
                    onClick={() => setTripType("roundTrip")}>
                    Round Trip
                </button>
                <button
                    type="button"
                    className={tripType === "oneWay" ? "active" : ""}
                    onClick={() => setTripType("oneWay")}>
                    One Way
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flight-search-row">
                    <div className="search-field">
                        <label htmlFor="departure">
                            From
                        </label>
                        <select
                            id="departure"
                            name="departure"
                            value={searchData.departure}
                            onChange={handleChange}
                            required>
                            <option value="">
                                Select departure
                            </option>
                            {airports.map((airport) => (
                                <option
                                    key={airport.iata}
                                    value={airport.iata}>
                                    {airport.city} ({airport.iata})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="search-field">
                        <label htmlFor="destination">
                            To
                        </label>
                        <select
                            id="destination"
                            name="destination"
                            value={searchData.destination}
                            onChange={handleChange}
                            required>
                            <option value="">
                                Select destination
                            </option>
                            {airports.map((airport) => (
                                <option
                                    key={airport.iata}
                                    value={airport.iata}>
                                    {airport.city} ({airport.iata})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flight-search-row">
                    <div className="search-field">
                        <label htmlFor="departureDate">
                            Departure
                        </label>
                        <input
                            type="date"
                            id="departureDate"
                            name="departureDate"
                            value={searchData.departureDate}
                            onChange={handleChange}
                            required/>
                    </div>

                    {tripType === "roundTrip" && (
                        <div className="search-field">
                            <label htmlFor="returnDate">
                                Return
                            </label>

                            <input
                                type="date"
                                id="returnDate"
                                name="returnDate"
                                value={searchData.returnDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                </div>

                <div className="flight-search-row">

                    <div className="search-field">
                        <label htmlFor="adults">
                            Passengers
                        </label>

                        <select
                            id="adults"
                            name="adults"
                            value={searchData.adults}
                            onChange={handleChange}
                        >
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                            <option value="5">5 Adults</option>
                            <option value="6">6 Adults</option>
                            <option value="7">7 Adults</option>
                            <option value="8">8 Adults</option>
                            <option value="9">9 Adults</option>
                        </select>
                    </div>

                    <div className="search-field">
                        <label htmlFor="cabin">
                            Cabin
                        </label>

                        <select
                            id="cabin"
                            name="cabin"
                            value={searchData.cabin}
                            onChange={handleChange}
                        >
                            <option value="economy">
                                Economy
                            </option>

                            <option value="business">
                                Business
                            </option>

                            <option value="first">
                                First
                            </option>
                        </select>
                    </div>

                </div>

                <div className="search-button-container">
                    <button
                        type="submit"
                        className="search-flights-button"
                    >
                        Search Flights
                    </button>
                </div>

            </form>

        </div>
    );
}

export default FlightSearch;