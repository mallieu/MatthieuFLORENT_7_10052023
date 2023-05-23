import logo from '../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();

    const activeLink = (linkUrl) => {
        return location.pathname === linkUrl;
    };

    return (
        <nav className="header">
            <a href="/">
                <img src={logo} alt="logo-kasa" />
            </a>
            <ul>
                <li>
                    <Link
                        to="/"
                        className={activeLink('/') ? 'active-link' : ''}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/a-propos"
                        className={activeLink('/a-propos') ? 'active-link' : ''}
                    >
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
