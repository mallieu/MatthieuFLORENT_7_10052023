import React from 'react';
import useAPICall from '../../assets/API/API';
import { MapList } from '../../components/Helpers/Helpers';

function ListeAnnonces() {
    const data = useAPICall('/data.json');

    return (
        <MapList
            data={data}
            container_Class="container__card-appartment"
            component_Class="card-appartment overlay-cards"
            hasBackgroundImage={true}
            isDiv={true}
            isComponent={true}
            component={(item) => (
                <a
                    href={`/fiche-logement/${item.data.id}`}
                    className="clickable-div"
                >
                    <h2>{item.data.title}</h2>
                </a>
            )}
        />
    );
}

export default ListeAnnonces;
