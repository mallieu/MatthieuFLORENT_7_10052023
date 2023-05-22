const CollapseModule = ({ title, content }) => {
    return (
        <>
            <div className="collapseModule">
                <h4 className="collapseModule__title">{title}</h4>
                <div className="collapseModule__content">{content}</div>
            </div>
        </>
    );
};

export default CollapseModule;
