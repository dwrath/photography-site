import logo from '../images/logo.png'
function HeroScene() {
    return(
        <section className="container hero-scene justify-center hero-margin">
            <div className="row">
                <div className="column">
                    <div className="row">
                        <img src={logo}/>
                    </div>
                    <div className="row vertical">
                        <div className="column title-paragraph align-center">
                            <p>Premium Photography and Videography.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroScene;