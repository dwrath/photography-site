import ig from '../images/ig-logo.png';
import tiktok from '../images/tiktok-logo.png';
import email from '../images/email-logo.png';
function Footer() {
    return(
        <div className="container footer-container">
            <div className="row">
                <div className="column gap-10">
                    <div className="row">
                        <h3>TTE Media</h3>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={ig} alt="Instagram Logo" className="logo"/>
                        </div>
                        <p>Instagram</p>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={tiktok} alt="TikTok Logo" className="logo"/>
                        </div>
                        <p>Tiktok</p>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={email} alt="email Logo" className="logo"/>
                        </div>
                        <p><a>Email</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;