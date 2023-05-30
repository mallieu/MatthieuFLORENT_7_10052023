import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import useAPICall from '../../assets/API/API';
import { MapList } from '../../components/Helpers/Helpers';
import CollapseModule from '../../components/CollapseModule/CollapseModule';
import { RatingStar } from '../../assets/icons/Rating-star-icon';
import Carrousel from '../../components/Carrousel/Carrousel';

// Identifie l'appartement à afficher
const FicheLogement = () => {
    const data = useAPICall('/data.json');
    const navigate = useNavigate();
    const { appartmentId } = useParams();
    const thisAppartment = data.find(
        (appartment) => appartment.id === appartmentId
    );
    // if (thisAppartment === undefined) {
    //     navigate('/page404');
    // }
    return (
        <div>
            {thisAppartment && (
                <>
                    <AppartmentDatas {...thisAppartment} key={appartmentId} />
                </>
            )}
        </div>
    );
};

// Génère ses informations
const AppartmentDatas = ({
    title,
    location,
    description,
    equipments,
    pictures,
    tags,
    rating,
    host,
}) => {
    const collapseModules = [
        {
            title: 'Description',
            content: description,
        },
        {
            title: 'Équipements',
            content: <MapList data={equipments} />,
        },
    ];

    return (
        <>
            {/* Carrousel généré à partir des images disponibles */}
            <Carrousel data={pictures} />

            <div className="infos__container">
                <div className="flex__Column infosLogement">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <MapList data={tags} component_Class="tags" />
                </div>

                <div className="flex__Column infosHost">
                    <HostProfile {...host} />
                    <HostRating rating={rating} />
                </div>
            </div>
            <MapList
                data={collapseModules}
                container_Class="collapseModules__container"
                component_Class="collapseModules__column"
                isDiv={true}
                isComponent={true}
                component={({ data }) => (
                    <CollapseModule title={data.title} content={data.content} />
                )}
            />
        </>
    );
};

// Informations sur l'hôte
const HostProfile = ({ name, picture }) => {
    return (
        <div className="infosHost__container">
            <div className="infosHost__name">{name}</div>
            <div
                className="infosHost__picture"
                style={{ backgroundImage: `url(${picture})` }}
            ></div>
        </div>
    );
};

// Calcul du nombre d'étoiles à coloriser
const HostRating = ({ rating }) => {
    const getRatingColor = (index) => {
        return index < rating
            ? 'infosHost__rating--colorized'
            : 'infosHost__rating--noColor';
    };

    const ratingStars = Array.from({ length: 5 }, (_, index) => (
        <RatingStar key={index} className={getRatingColor(index)} />
    ));

    return <div className="infosHost__rating">{ratingStars}</div>;
};

AppartmentDatas.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,
    cover: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    rating: PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
};

// Les propTypes de l'appartement sont partagésa avec l'host, puisqu'il s'agit du même logement
HostProfile.propTypes = AppartmentDatas.propTypes.host;
HostRating.propTypes = AppartmentDatas.propTypes.rating;

export default FicheLogement;
