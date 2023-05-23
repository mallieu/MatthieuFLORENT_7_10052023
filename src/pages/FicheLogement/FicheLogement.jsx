import React from 'react';
import { useParams } from 'react-router-dom';
import useAPICall from '../../assets/API/API';
import CollapseModule from '../../components/CollapseModule/CollapseModule';
import { MapList } from '../../components/Helpers/Helpers';
import Banner from '../../components/Banners/Banner';
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
    const collapseModules = [
        {
            title: 'Description',
            content: appartment.description,
        },
        {
            title: 'Équipements',
            content: <MapList data={appartment.equipments} />,
        },
    ];
    return (
        <>
            <Banner
                className="banner--ficheLogement"
                HasBackgroundImage={appartment.cover}
            />

            <div className="container">
                <div className="flex__Column infosLogement">
                    <h1>{appartment.title}</h1>
                    <h2>{appartment.location}</h2>
                    <MapList data={appartment.tags} component_Class="tags" />
                </div>

                <div className="flex__Column infosHost">
                    <HostProfile appartment={appartment} />
                    <HostRating rating={appartment.rating} />
                </div>
            </div>
            <MapList
                data={collapseModules}
                container_Class="container__collapseModules"
                component_Class="column__collapseModule"
                isDiv={true}
                isComponent={true}
                component={({ data }) => (
                    <CollapseModule title={data.title} content={data.content} />
                )}
            />
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

    const ratingStars = Array.from({ length: 5 }, (_, index) => (
        <RatingStar key={index} className={getRatingColor(index)} />
    ));

    return (
        <>
            <div className="infosHost__rating">{ratingStars}</div>
        </>
    );
};

export default FicheLogement;
