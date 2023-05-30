import PropTypes from 'prop-types';
export const CarrouselControllersIcons = ({ className, icon, onClick }) => {
    let iconPath;

    switch (icon) {
        case 'arrow-left':
            iconPath = (
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            );
            break;
        case 'arrow-right':
            iconPath = (
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            );
            break;
        case 'dots':
            iconPath = (
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            );
            break;
        default:
            break;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={className}
            onClick={onClick}
        >
            {iconPath}
        </svg>
    );
};

CarrouselControllersIcons.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};
