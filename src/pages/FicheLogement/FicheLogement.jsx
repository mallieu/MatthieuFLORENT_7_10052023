import { useParams } from 'react-router-dom';
import useAPICall from '../../assets/API/API';
import CollapseModule from '../../components/CollapseModule/CollapseModule';
import { MapList } from '../../components/Helpers';
import { RatingStar } from '../../assets/images/Rating-star-icon';

const FicheLogement = () => {
    const data = useAPICall('/data.json');
    const { appartmentId } = useParams();
    const thisAppartment = data.find(
        (appartment) => appartment.id === appartmentId
    );

    return (
        <div>
            {thisAppartment && (
                <>
                    <AppartmentDatas
                        key={appartmentId}
                        appartment={thisAppartment}
                    />
                </>
            )}
        </div>
    );
};

const AppartmentDatas = ({ appartment }) => {
    return (
        <>
            <div
                className="banner--ficheLogement"
                style={{ backgroundImage: `url(${appartment.cover})` }}
            ></div>
            <div className="container">
                <div className="flex__Column infosLogement">
                    <h1>{appartment.title}</h1>
                    <h2>{appartment.location}</h2>
                    <MapList data={appartment.tags} li_Class="tags" />
                </div>

                <div className="flex__Column infosHost">
                    <HostProfile appartment={appartment} />
                    <HostRating rating={appartment.rating} />
                </div>
            </div>
            <div className="container__collapseModules">
                <div className="column__collapseModule">
                    <CollapseModule
                        title="Description"
                        content={appartment.description}
                    />
                </div>
                <div className="column__collapseModule">
                    <CollapseModule
                        title="Équipements"
                        content={<MapList data={appartment.equipments} />}
                    />
                </div>
            </div>
        </>
    );
};

const HostProfile = ({ appartment }) => {
    const host = appartment.host;
    return (
        <>
            <div className="infosHost__container">
                <div className="infosHost__name">{host.name}</div>
                <div
                    className="infosHost__picture"
                    style={{ backgroundImage: `url(${host.picture})` }}
                ></div>
            </div>
        </>
    );
};

const HostRating = ({ rating }) => {
    const getRatingColor = (index) => {
        return index < rating
            ? 'infosHost__rating--colorized'
            : 'infosHost__rating--noColor';
    };

    return (
        <>
            <div className="infosHost__rating">
                <RatingStar className={getRatingColor(0)} />
                <RatingStar className={getRatingColor(1)} />
                <RatingStar className={getRatingColor(2)} />
                <RatingStar className={getRatingColor(3)} />
                <RatingStar className={getRatingColor(4)} />
            </div>
        </>
    );
};

export default FicheLogement;