import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <nav className="header">
            <img src={logo} alt="logo-kasa" />

            <ul className="menu-links">
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/a-propos">A propos</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
