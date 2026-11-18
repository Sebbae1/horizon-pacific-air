{/*
    Creator: Sebastian Jaculbe
    Created: June 10th, 2026
    Updated: September 7th, 2026
    Version: 0.3
*/}

{/* Import the main style */}
import "../styles/horizon-style.css";

{/* Import router components */}
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

{/* Import the main components */}
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

{/* Import the aircrafts' infos and status' */}
import DC910InfoPage from "../pages/DC910InfoPage.jsx";
import A320NEOInfoPage from "../pages/A320NEOInfoPage.jsx";
import MC21400InfoPage from "../pages/MC21400InfoPage.jsx";
import B777300ERInfoPage from "../pages/B777300ERInfoPage.jsx";
import B747800InfoPage from "../pages/B747800InfoPage.jsx";
import A320NEOStatusPage from "../pages/A320NEOStatusPage.jsx";
import B777300ERStatusPage from "../pages/B777300ERStatusPage.jsx";
import B747800StatusPage from "../pages/B747800StatusPage.jsx";
import DC910StatusPage from "../pages/DC910StatusPage.jsx";
import MC21400StatusPage from "../pages/MC21400StatusPage.jsx";
import TicketingPage from "../pages/TicketingPage.jsx";
import HomePage from "../pages/HomePage.jsx"


function App(){
    return (
        <BrowserRouter>
            <Header />

            <Navbar />

            <main>

                <Routes>
                {/* Home Page */}
                <Route path="/" element={<HomePage />} />
                {/* Ticketing */}
                <Route path="/ticketing" element={<TicketingPage />} />
                {/* Fleet Pages */}
                <Route path="/fleet/a320neo" element={<A320NEOInfoPage />} />
                <Route path="/fleet/a320neo/status" element={<A320NEOStatusPage />} />
                <Route path="/fleet/b777300er" element={<B777300ERInfoPage />} />
                <Route path="/fleet/b777300er/status" element={<B777300ERStatusPage />} />
                <Route path="/fleet/b747800" element={<B747800InfoPage />} />
                <Route path="/fleet/b747800/status" element={<B747800StatusPage />} />
                <Route path="/fleet/dc910" element={<DC910InfoPage />} />
                <Route path="/fleet/dc910/status" element={<DC910StatusPage />} />
                <Route path="/fleet/mc21400" element={<MC21400InfoPage />} />
                <Route path="/fleet/mc21400/status" element={<MC21400StatusPage />} />
                

                </Routes>
        
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;