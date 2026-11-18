{/*
    Creator: Sebastian Jaculbe
    Created: September 7th, 2026
    Updated: September 7th, 2026
    Version 0.3
*/}

{/*
    Horizon Pacific Air
    Passenger Information Component

    Purpose:
    Collect passenger information for the selected flight.
*/}

import { useState } from "react";
import "../../styles/ticketing/style-passenger-information.css";

function PassengerInformation({
    flight,
    searchData,
    onBack,
    onSubmit
}) {

    const passengerCount = Number(searchData.adults);


    const [passengers, setPassengers] = useState(
        Array.from(
            { length: passengerCount },
            () => ({
                firstName: "",
                middleName: "",
                lastName: "",
                dateOfBirth: "",
                gender: "",
                nationality: ""
            })
        )
    );


    function handleChange(
        passengerIndex,
        event
    ) {

        const { name, value } = event.target;

        setPassengers(previousPassengers =>
            previousPassengers.map(
                (passenger, index) => {

                    if (index !== passengerIndex) {
                        return passenger;
                    }

                    return {
                        ...passenger,
                        [name]: value
                    };

                }
            )
        );
    }


    function handleSubmit(event) {

        event.preventDefault();

        onSubmit({
            flight,
            passengers
        });
    }


    return (
        <section className="passenger-information">

            <div className="passenger-information-header">

                <button
                    type="button"
                    className="back-to-selection-button"
                    onClick={onBack}
                >
                    ← Back to Flight
                </button>

                <h3>
                    Passenger Information
                </h3>

                <p>
                    Please enter the information for each
                    passenger traveling on this flight.
                </p>

            </div>


            <form onSubmit={handleSubmit}>

                {passengers.map(
                    (passenger, index) => (

                        <div
                            className="passenger-form-card"
                            key={index}
                        >

                            <div className="passenger-form-header">

                                <h4>
                                    Passenger {index + 1}
                                </h4>

                            </div>


                            <div className="passenger-form-grid">

                                <div className="passenger-field">

                                    <label htmlFor={`firstName-${index}`}>
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id={`firstName-${index}`}
                                        name="firstName"
                                        value={passenger.firstName}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                        required
                                    />

                                </div>


                                <div className="passenger-field">

                                    <label htmlFor={`middleName-${index}`}>
                                        Middle Name
                                    </label>

                                    <input
                                        type="text"
                                        id={`middleName-${index}`}
                                        name="middleName"
                                        value={passenger.middleName}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                <div className="passenger-field">

                                    <label htmlFor={`lastName-${index}`}>
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id={`lastName-${index}`}
                                        name="lastName"
                                        value={passenger.lastName}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                        required
                                    />

                                </div>


                                <div className="passenger-field">

                                    <label htmlFor={`dateOfBirth-${index}`}>
                                        Date of Birth
                                    </label>

                                    <input
                                        type="date"
                                        id={`dateOfBirth-${index}`}
                                        name="dateOfBirth"
                                        value={passenger.dateOfBirth}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                        required
                                    />

                                </div>


                                <div className="passenger-field">

                                    <label htmlFor={`gender-${index}`}>
                                        Gender
                                    </label>

                                    <select
                                        id={`gender-${index}`}
                                        name="gender"
                                        value={passenger.gender}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                        required
                                    >

                                        <option value="">
                                            Select gender
                                        </option>

                                        <option value="male">
                                            Male
                                        </option>

                                        <option value="female">
                                            Female
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>

                                        <option value="unspecified">
                                            Prefer not to say
                                        </option>

                                    </select>

                                </div>


                                <div className="passenger-field">

                                    <label htmlFor={`nationality-${index}`}>
                                        Nationality
                                    </label>

                                    <input
                                        type="text"
                                        id={`nationality-${index}`}
                                        name="nationality"
                                        value={passenger.nationality}
                                        onChange={(event) =>
                                            handleChange(
                                                index,
                                                event
                                            )
                                        }
                                        required
                                    />

                                </div>

                            </div>

                        </div>

                    )
                )}


                <div className="passenger-form-actions">

                    <button
                        type="submit"
                        className="continue-to-review-button"
                    >
                        Continue
                    </button>

                </div>

            </form>

        </section>
    );
}

export default PassengerInformation;