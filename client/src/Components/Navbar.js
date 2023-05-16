import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
function Navbar() {
    return(
        <header className="container justify-center nav-overlay">
            <div className="row justify-center align-center nav-positioning nav-background">
                <div className="column shrink logo">TTE Media</div>
                <div className="column shrink">
                    <nav className="row justify-right">
                        <div className="column shrink"><Link to={Home} title="Go Home">Home</Link></div>
                        <div className="column shrink"><Link to={Home} title="About">About</Link></div>
                        <div className="column shrink"><Link to={Home} title="Our Team">Our Team</Link></div>
                        <div className="column shrink"><Link to={Home}>Contact</Link></div>
                    </nav>
                </div>
                <div className="column shrink">
                    <button className="sign-up-btn">Sign up</button>
                </div>
            </div>
        </header>
    )
}
export default Navbar;