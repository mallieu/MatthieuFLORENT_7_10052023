import useAPICall from '../../assets/API/API';
import { MapList } from '../../components/Helpers/Helpers';

function ListeAnnonces() {
    const data = useAPICall('/data.json');

    return (
        <MapList
            data={data}
            container_Class="CardsLogements__container"
            component_Class="CardsLogements__cardItem overlay-cards"
            hasBackgroundImage={true} // Ajoute les vignettes
            isDiv={true} // Définit  le format
            isComponent={true} // Génération de composant
            component={(item) => (
                <a
                    href={`/fiche-logement/${item.data.id}`}
                    className="clickable-div" // Lien par dessus le bloc
                >
                    <h2>{item.data.title}</h2>
                </a>
            )}
        />
    );
}

export default ListeAnnonces;
