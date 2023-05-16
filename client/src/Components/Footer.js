import ig from '../images/ig-logo.png';
import tiktok from '../images/tiktok-logo.png';
import email from '../images/email-logo.png';
function Footer() {
    return(
        <div className="container footer-container">
            <div className="row">
                <div className="column gap-10">
                    <div className="row">
                        <h3 className="footer-title">TTE Media</h3>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={ig} alt="Instagram Logo" className="logo"/>
                        </div>
                        <p><a href="https://instagram.com/nic_v._?igshid=YmMyMTA2M2Y=" className="logo">Instagram</a></p>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={tiktok} alt="TikTok Logo" className="logo"/>
                        </div>
                        <p><a href="https://www.tiktok.com/@nic_v._?_t=8c464k0c4je&_r=1" className="logo">Tiktok</a></p>
                    </div>
                    <div className="row">
                        <div className="logo-container">
                            <img src={email} alt="email Logo" className="logo"/>
                        </div>
                        <p><a href="mailto:mrvincent89@yahoo.com" className="logo">Email</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;