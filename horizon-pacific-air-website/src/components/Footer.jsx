/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: May 21st, 2026
    Version 0.3
*/


function Footer(){
    return (
        <header className="header">
            <div className="header-left">
                <img src={"/images/airlinelogos/hpa-logo3.jpeg"} alt="Airline Logo" className="airline-logo"/>
            </div>
            <div className="header-center">
                <h1>Horizon Pacific Air</h1>
            </div>
            <div className="header-right">
                <img src={"/images/alliance-logos/alliance-logo.jpeg"} alt="Alliance Logo" className="alliance-logo"/>
            </div>
        </header>
    );
}

export default Footer;