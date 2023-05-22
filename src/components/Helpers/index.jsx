const MapList = ({ data, li_Class, ul_Class }) => {
    return (
        <ul className={ul_Class}>
            {data.map((item) => (
                <li className={li_Class} key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export { MapList };
