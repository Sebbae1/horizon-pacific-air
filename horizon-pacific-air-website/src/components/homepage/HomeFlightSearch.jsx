{/*
    Creator: Sebastian Jaculbe
    Created: September 18th, 2026
    Updated: September 18th, 2026
    Version: 0.3

    Horizon Pacific Air
    Homepage Flight Search

    Purpose:
    Provide a prominent flight-search entry point
    on the homepage.

    Full ticket-search functionality will connect
    to the existing ticketing system.
*/}

import "../../styles/home-flight-search.css";

function HomeFlightSearch() {

    return (
        <section className="home-flight-search">

            <div className="home-flight-search-tabs">

                <button
                    type="button"
                    className="active"
                >
                    ✈ Book a Flight
                </button>

                <button type="button">
                    Manage Booking
                </button>

                <button type="button">
                    Check In
                </button>

                <button type="button">
                    Flight Status
                </button>

            </div>


            <div className="home-flight-search-form">

                <div className="home-search-field">

                    <label>
                        From
                    </label>

                    <div className="home-search-input">
                        Select departure
                    </div>

                </div>


                <button
                    type="button"
                    className="swap-airports-button"
                    aria-label="Swap airports"
                >
                    ⇄
                </button>


                <div className="home-search-field">

                    <label>
                        To
                    </label>

                    <div className="home-search-input">
                        Select destination
                    </div>

                </div>


                <div className="home-search-field">

                    <label>
                        Departure
                    </label>

                    <div className="home-search-input">
                        Select date
                    </div>

                </div>


                <div className="home-search-field">

                    <label>
                        Return
                    </label>

                    <div className="home-search-input">
                        Select date
                    </div>

                </div>


                <div className="home-search-field">

                    <label>
                        Passengers
                    </label>

                    <div className="home-search-input">
                        1 Passenger
                    </div>

                </div>


                <button
                    type="button"
                    className="home-search-button"
                >
                    Search Flights →
                </button>

            </div>


            <div className="home-search-options">

                <label>
                    <input
                        type="radio"
                        name="home-trip-type"
                        defaultChecked
                    />

                    Round Trip
                </label>

                <label>
                    <input
                        type="radio"
                        name="home-trip-type"
                    />

                    One Way
                </label>

                <button
                    type="button"
                    className="multi-city-button"
                >
                    Multi-city →
                </button>

            </div>

        </section>
    );
}

export default HomeFlightSearch;