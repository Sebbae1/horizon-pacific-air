{/*
    Creator: Sebastian Jaculbe
    Created: September 7th, 2026
    Updated: September 7th, 2026
    Version 0.3
*/}

{/*
    Horizon Pacific Air
    Ticketing Page

    Purpose:
    Main page for searching and booking flights.
*/}

import { useState } from "react";
import FlightSearch from "../components/ticketing/FlightSearch.jsx";
import FlightResults from "../components/ticketing/FlightResults.jsx";
import FlightSelection from "../components/ticketing/FlightSelection.jsx";
import PassengerInformation from "../components/ticketing/PassengerInformation.jsx";
import "../styles/ticketing/style-ticketing-page.css";

function TicketingPage() {
    const [bookingStep, setBookingStep] = useState("search");
    const [searchData, setSearchData] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [passengerData, setPassengerData] = useState(null);
    
    function handleSearch(data) {

        setSearchData(data);

        setSelectedFlight(null);

        setPassengerData(null);

        setBookingStep("search");
    }

    function handleSelectFlight(flight) {

        setSelectedFlight(flight);

        setBookingStep("selection");
    }

    function handleContinueToPassengers() {

        setBookingStep("passengers");
    }

    function handleBackToResults() {

        setSelectedFlight(null);

        setBookingStep("search");
    }

    function handlePassengerSubmit(data) {
        setPassengerData(data);
        console.log("Passenger Information:", data);

        // Booking review will be added here later.
        // setBookingStep("review");
    }

    function handleBackToSelection() {
        setBookingStep("selection");
    }

    return (
        <div className="ticketing-page">
            <section className="ticketing-hero">
                <div className="ticketing-hero-content">
                    <h2>Book Your Flight</h2>
                    <p>
                        Search for flights and find the best option
                        for your journey with Horizon Pacific Air.
                    </p>
                </div>
            </section>
            <section className="ticketing-search-section">
                {bookingStep === "search" && (

                    <>
                        <FlightSearch
                            onSearch={handleSearch}
                        />

                        {searchData && (
                            <FlightResults
                                searchData={searchData}
                                tripType={searchData.tripType}
                                onSelectFlight={handleSelectFlight}
                            />
                        )}
                    </>

                )}


                {bookingStep === "selection" && selectedFlight && (

                    <FlightSelection
                        flight={selectedFlight}
                        searchData={searchData}
                        onBack={handleBackToResults}
                        onContinue={handleContinueToPassengers}
                    />

                )}


                {bookingStep === "passengers" && selectedFlight && (

                    <PassengerInformation
                        flight={selectedFlight}
                        searchData={searchData}
                        onBack={handleBackToSelection}
                        onSubmit={handlePassengerSubmit}
                    />

                )}
            </section>
        </div>
    );
}

export default TicketingPage;