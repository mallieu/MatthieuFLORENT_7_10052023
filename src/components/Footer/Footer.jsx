import logo from '../../assets/images/logo-white.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex__Column footer">
            <div className="footer__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer__credits">
                © {currentYear} Kasa. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
