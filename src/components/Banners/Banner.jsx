import PropTypes from 'prop-types';

// Title => Titre de la page
// HasBackgroundImage => Permet de générer en background dynamique en style
const Banner = ({ className, title, HasBackgroundImage }) => (
    <div
        className={className}
        style={
            HasBackgroundImage
                ? { backgroundImage: `url(${HasBackgroundImage})` }
                : null
        }
    >
        {title ? <h1>{title}</h1> : null}
    </div>
);

Banner.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    HasBackgroundImage: PropTypes.string,
};

export default Banner;
