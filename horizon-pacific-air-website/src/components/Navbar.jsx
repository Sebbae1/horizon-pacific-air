{/*
    Creator: Sebastian Jaculbe
    Created: May 21st, 2026
    Updated: June 10th, 2026
    Version 0.3
*/}

/* Import the Link component from Router */
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ticketing">Book a Flight</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}

export default Navbar;