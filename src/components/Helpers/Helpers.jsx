import PropTypes from 'prop-types';

// Fonction permettant de parcourir une liste et de générer des éléments
// Nécessite data en array
// Génération par défaut sous forme de liste
// Peut produire des div ou des composants
// /!\ Si isComponent = true, component est défini et le composant à générer est wrappé par le module
// Ex : CollapseModule

const MapList = ({
    data,
    container_Class,
    component_Class,
    hasBackgroundImage = false,
    isDiv = false,
    isComponent = false,
    component: Component, // Destructuration + renommage du composant
}) => {
    const Container = isDiv ? 'div' : 'ul';
    const Item = isDiv ? 'div' : 'li';

    return (
        <Container className={container_Class}>
            {data.map((item, index) => {
                const { id, cover } = item;
                let key = id ? id : item;

                if (typeof key === 'object') {
                    const values = Object.values(item);
                    key = values[0];
                }

                const itemStyle = hasBackgroundImage
                    ? { backgroundImage: `url(${cover})` }
                    : null;

                return (
                    <Item
                        className={component_Class}
                        key={key}
                        style={itemStyle}
                        role={isDiv ? 'listitem' : null} // Ajout de l'attribut role pour test
                    >
                        {isComponent ? (
                            <Component data={item} index={index} />
                        ) : (
                            item
                        )}
                    </Item>
                );
            })}
        </Container>
    );
};

MapList.propTypes = {
    data: PropTypes.array.isRequired,
    container_Class: PropTypes.string,
    component_Class: PropTypes.string,
    hasBackgroundImage: PropTypes.bool,
    isDiv: PropTypes.bool,
    isComponent: PropTypes.bool,
    component: PropTypes.elementType,
};

export { MapList };
