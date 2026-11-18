{/*
    Creator: Sebastian Jaculbe
    Created: September 18th, 2026
    Updated: September 18th, 2026
    Version: 0.3

    Horizon Pacific Air
    Destination Section
*/}

import "../../styles/home-destinations.css";

const destinations = [
    {
        name: "North America",
        description: "Iconic cities and endless opportunities.",
        image: "/images/homepage/destinations/north-america.jpg"
    },
    {
        name: "Asia",
        description: "Dynamic cultures and timeless beauty.",
        image: "/images/homepage/destinations/asia.jpg"
    },
    {
        name: "Europe",
        description: "Rich history and modern experiences.",
        image: "/images/homepage/destinations/europe.jpg"
    },
    {
        name: "Oceania",
        description: "Natural wonders closer than ever.",
        image: "/images/homepage/destinations/oceania.jpg"
    },
    {
        name: "South America",
        description: "Vibrant destinations and unforgettable journeys.",
        image: "/images/homepage/destinations/south-america.jpg"
    }
];

function DestinationSection() {

    return (
        <section className="home-destinations">

            <div className="home-section-heading">

                <div>

                    <h2>
                        Explore a World of Possibilities
                    </h2>

                    <p>
                        Our extensive network connects you
                        to vibrant cities, cultural destinations,
                        and new opportunities across the globe.
                    </p>

                </div>

                <button type="button">
                    View All Destinations →
                </button>

            </div>


            <div className="destination-grid">

                {destinations.map((destination) => (

                    <article
                        className="destination-card"
                        key={destination.name}
                    >

                        <img
                            src={destination.image}
                            alt={destination.name}
                        />

                        <div className="destination-card-overlay">

                            <h3>
                                {destination.name}
                            </h3>

                            <p>
                                {destination.description}
                            </p>

                            <span>
                                Explore →
                            </span>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default DestinationSection;