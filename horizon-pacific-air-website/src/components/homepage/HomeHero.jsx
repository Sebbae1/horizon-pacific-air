{/*
    Creator: Sebastian Jaculbe
    Created: September 18th, 2026
    Updated: September 18th, 2026
    Version: 0.3
    
    Horizon Pacific Air
    Homepage Hero

    Purpose:
    Main visual introduction to the airline.
*/}

import "../../styles/home-hero.css";

function HomeHero() {

    return (
        <section className="home-hero">

            <div className="home-hero-overlay">

                <div className="home-hero-content">

                    <p className="home-hero-eyebrow">
                        HORIZON PACIFIC AIR
                    </p>

                    <h1>
                        A More Connected World
                    </h1>

                    <p className="home-hero-description">
                        From Chicago to the world, we bring
                        people closer to the places that matter.
                    </p>

                    <button
                        type="button"
                        className="home-hero-button"
                    >
                        Book Your Journey →
                    </button>

                </div>

            </div>

        </section>
    );
}

export default HomeHero;