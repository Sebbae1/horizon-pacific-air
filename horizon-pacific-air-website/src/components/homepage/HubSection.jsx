{/*
    Creator: Sebastian Jaculbe
    Created: September 18th, 2026
    Updated: September 18th, 2026
    Version: 0.3

    Horizon Pacific Air
    Global Hub Section
*/}

import hubs from "../../data/hubs.json";
import airports from "../../data/airports.json";

import "../../styles/home-hubs.css";

function HubSection() {

    const activeHubs = hubs.filter(
        hub => hub.active
    );

    return (
        <section className="home-hubs">

            <div className="home-section-heading">

                <div>

                    <h2>
                        Our Global Hubs
                    </h2>

                    <p>
                        Strategically located.
                        Seamlessly connected.
                    </p>

                </div>

                <button type="button">
                    Discover Our Network →
                </button>

            </div>


            <div className="hub-grid">

                {activeHubs.map((hub) => {

                    const airport = airports.find(
                        item => item.iata === hub.airport
                    );

                    return (
                        <article
                            className="hub-card"
                            key={hub.airport}
                        >

                            <div className="hub-image">

                                <span>
                                    {hub.airport}
                                </span>

                            </div>

                            <h3>
                                {airport?.city || hub.airport}
                            </h3>

                            <p>
                                {hub.airport}
                            </p>

                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default HubSection;