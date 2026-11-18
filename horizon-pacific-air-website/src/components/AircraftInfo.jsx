/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: May 26th, 2026
    Version 0.3
*/

function AircraftInfo({ aircraft }) {
  return (
    <div className="aircraft-info">
      <h1>{aircraft.name}</h1>
      <img src={aircraft.image} alt={aircraft.name} className="aircraft-image" />

      <div className="aircraft-content">
        <h2>{aircraft.name}</h2>
  
        <h3>Purpose:</h3>
        <p>{aircraft.description.purpose}</p>
        <h3>Configurations:</h3>
        <p>{aircraft.description.configurations.map((config) => (
          <li key={config}>{config}</li>
        ))}</p>
        <h3>Operational Focus:</h3>
        <p>{aircraft.description.operationalFocus.map((focus) => (
          <li key={focus}>{focus}</li>
        ))}</p>
        <h3>Advantages:</h3>
        <p>{aircraft.description.advantages.map((advantage) => (
          <li key={advantage}>{advantage}</li>
        ))}</p>
        <h3>Disadvantages:</h3>
        <p>{aircraft.description.disadvantages.map((disadvantage) => (
          <li key={disadvantage}>{disadvantage}</li>
        ))}</p>
      </div>

      <div className="hubs">
        <h3>Hubs:</h3>
        <ul>
          {aircraft.hubs.map((hub) => (
            <li key={hub.iata}>
              {hub.airportLocation} {" ("} {hub.iata} {"), "} {hub.country}
            </li>
          ))}
        </ul>
      </div>

      <div className="destinations">
        <h3>Destinations:</h3>
        <ul>
          {aircraft.destinations.map((continent) => (
            <div key={continent.continent}>
            <h3>{continent.continent}</h3>
            <ul>
              {continent.airports.map((airport) => (
                <li key={airport.iata}>
                  {airport.airportLocation} 
                  {airport.state && ', ${airport.state}'}
                  {" ("} {airport.iata} {"), "} 
                  {airport.country}
                </li>
                ))}
            </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="aircraft-stats">
        <h2>Additional Details:</h2>
        <p className="serviceStatus">Service Status: {aircraft.serviceStatus}</p>
        <p>Fuel Consumption: {aircraft.performance.fuelConsumption}</p>
        <p>Aircraft Range: {aircraft.performance.range}</p>
        <p>Aircraft Maintenance Interval: {aircraft.performance.maintenanceInterval}</p>
        <p className="roi">ROI Status: {aircraft.roiStatus}</p>
        <p>Average Aircraft Price (USD): {aircraft.financials.averageAircraftPriceUSD}</p>
        <p>Estimated Fleet Investment (USD): {aircraft.financials.estimatedFleetInvestmentUSD}</p>
      </div>
    </div>
  );
}

export default AircraftInfo;