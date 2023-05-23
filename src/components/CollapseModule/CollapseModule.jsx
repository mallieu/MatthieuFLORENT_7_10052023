import { useState } from 'react';
import { ChevronToggle } from '../../assets/images/Chevron-toggle';

const CollapseModule = ({ title, content }) => {
    const [stateModule, setStateModule] = useState(true);

    function CollapseModuleClick() {
        setStateModule(!stateModule);
    }
    return (
        <>
            <div className="collapseModule">
                <div className="collapseModule__titleBanner">
                    <h4>{title}</h4>
                    <ChevronToggle
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

export default CollapseModule;

// {stateModule && (
//     <div
//         className={`collapseModule__content
//         ${
//             stateModule
//                 ? 'collapseModule__content--collapsed'
//                 : 'collapseModule__content--uncollapsed'
//         }
//          `}
//     >
