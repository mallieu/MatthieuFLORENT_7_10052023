import React from 'react';

const MapList = ({
    data,
    container_Class,
    component_Class,
    hasBackgroundImage = false,
    isDiv = false,
    isComponent = false,
    component: Component,
}) => {
    const Container = isComponent ? 'div' : 'ul';
    const Item = isDiv ? 'div' : 'li';

    return (
        <Container className={container_Class}>
            {data.map((item) => {
                const { id, cover } = item;
                const key = id ? id : item;

                const itemStyle = hasBackgroundImage
                    ? { backgroundImage: `url(${cover})` }
                    : null;

                return (
                    <Item
                        className={component_Class}
                        key={key}
                        style={itemStyle}
                    >
                        {isComponent ? <Component data={item} /> : item}
                    </Item>
                );
            })}
        </Container>
    );
};

export { MapList };
