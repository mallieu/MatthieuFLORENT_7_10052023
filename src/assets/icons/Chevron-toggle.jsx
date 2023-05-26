import PropTypes from 'prop-types';

// Importation du chevron de CollapseModule en svg (manipulation simplifiée et modulable)
export const ChevronToggle = ({ className, state, onClick }) => {
    let icon;
    if (state === false) {
        icon = (
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        );
    } else {
        icon = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
        );
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={className}
            onClick={onClick}
        >
            {icon}
        </svg>
    );
};

ChevronToggle.propTypes = {
    className: PropTypes.string,
    state: PropTypes.bool,
    onClick: PropTypes.func,
};
