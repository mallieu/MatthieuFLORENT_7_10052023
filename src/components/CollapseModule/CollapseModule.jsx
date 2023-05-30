import PropTypes from 'prop-types';
import { useState } from 'react';
import CollapseModuleToggle from '../../assets/icons/CollapseModuleToggle';

const CollapseModule = ({ title, content }) => {
    const [stateModule, setStateModule] = useState(true);

    function CollapseModuleClick() {
        setStateModule(!stateModule); // Fermé par défaut
    }
    return (
        <>
            <div key={title} className="collapseModule__container">
                <div className="collapseModule__titleBanner">
                    <h4>{title}</h4>
                    <CollapseModuleToggle // Apparence variable
                        className="collapseModule__toggle"
                        state={stateModule}
                        onClick={CollapseModuleClick}
                    />
                </div>
                {stateModule && (
                    <div className="collapseModule__content">{content}</div>
                )}
            </div>
        </>
    );
};

CollapseModule.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CollapseModule;
