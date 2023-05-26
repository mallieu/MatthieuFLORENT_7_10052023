import { Link } from 'react-router-dom';

function page404() {
    return (
        <div className="page404__container">
            <h1 className="page404__title">404</h1>
            <h2 className="page404__text">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link to="/" className="page404__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default page404;
