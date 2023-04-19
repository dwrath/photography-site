function Navbar() {
    return(
        <header className="container justify-center nav-overlay">
            <div className="row justify-center align-center nav-positioning nav-background">
                <div className="column shrink logo">TTE Media</div>
                <div className="column shrink">
                    <nav className="row justify-right">
                        <div className="column shrink"><a href="#" title="Go Home">Home</a></div>
                        <div className="column shrink"><a href="#" title="About">About</a></div>
                        <div className="column shrink"><a href="#" title="Our Team">Our Team</a></div>
                        <div className="column shrink"><a href="#">Contact</a></div>
                    </nav>
                </div>
                <div className="column shrink">
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    )
}
export default Navbar;