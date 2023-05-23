const MapList = ({ data, component, component_Class, ul_Class }) => {
    return (
        <ul className={ul_Class}>
            {data.map((item) => (
                <li className={component_Class} key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export { MapList };
