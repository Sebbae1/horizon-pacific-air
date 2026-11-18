/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: June 30th, 2026
    Version 0.3
*/

function AircraftStatus({ fleet }) {
  return (
    <div className="fleet-status">

      <h2>Fleet Status</h2>

      <table>
        <thead>
          <tr>
            <th>Registration</th>
            <th>Configuration</th>
            <th>Price (USD)</th>
            <th>Status</th>
            <th>Flight Hours</th>
            <th>Cycles</th>
            <th>Delivered</th>
            <th>Sold</th>
            <th>Location</th>
            <th>Route</th>
          </tr>
        </thead>

        <tbody>
          {fleet.map((plane) => (
            <tr key={plane.registration}>
              <td>{plane.registration}</td>
              <td>{plane.configuration}</td>
              <td>{plane.status}</td>
              <td>{plane.delivered}</td>
              <td>{plane.sold}</td>
              <td>{plane.location}</td>
              <td>
                <ul>
                  {plane.route.map((route) => (
                    <li key={route}>{route}</li>
                  ))}
                </ul>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AircraftStatus;