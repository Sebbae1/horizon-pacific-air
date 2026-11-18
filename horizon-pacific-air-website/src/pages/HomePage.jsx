{/*
    Creator: Sebastian Jaculbe
    Created: September 18th, 2026
    Updated: September 18th, 2026
    Version: 0.3
*/}

import HomeHero from "../components/homepage/HomeHero.jsx";
import HomeFlightSearch from "../components/homepage/HomeFlightSearch.jsx";
import DestinationSection from "../components/homepage/DestinationSection.jsx";
import HubSection from "../components/homepage/HubSection.jsx";

import "../styles/home.css";

function HomePage() {

    return (
        <div className="home-page">

            <HomeHero />

            <HomeFlightSearch />

            <DestinationSection />

            <HubSection />

            <section className="home-feature-section">

                <div className="home-feature-image cabin-image">
                    <div className="home-feature-overlay">
                        <h2>Travel Refined</h2>

                        <p>
                            Thoughtful details.
                            A more personal journey.
                        </p>

                        <button type="button">
                            Explore Our Cabins
                        </button>
                    </div>
                </div>


                <div className="home-feature-image sustainability-image">
                    <div className="home-feature-overlay">
                        <h2>A Cleaner Tomorrow</h2>

                        <p>
                            We are committed to sustainable
                            aviation and a brighter future.
                        </p>

                        <button type="button">
                            Our Sustainability Journey
                        </button>
                    </div>
                </div>

            </section>


            <section className="home-services">

                <div className="home-services-inner">

                    <div className="home-service-item">
                        <span>🧳</span>
                        <p>Baggage Information</p>
                    </div>

                    <div className="home-service-item">
                        <span>▣</span>
                        <p>Travel Requirements</p>
                    </div>

                    <div className="home-service-item">
                        <span>✈</span>
                        <p>Airport Lounges</p>
                    </div>

                    <div className="home-service-item">
                        <span>♿</span>
                        <p>Special Assistance</p>
                    </div>

                    <div className="home-service-item">
                        <span>◇</span>
                        <p>HPA Club</p>
                    </div>

                    <div className="home-service-item">
                        <span>✈</span>
                        <p>More Services</p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default HomePage;