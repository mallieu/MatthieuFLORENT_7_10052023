import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CarrouselControllersIcons } from '../../assets/icons/CarrouselController';
import { MapList } from '../Helpers/Helpers';

const Carrousel = ({ data }) => {
    // currentSlide partagé avec tous les composants
    // State mis à jour depuis carrouselController uniquement
    const [currentSlide, setCurrentSlide] = useState(0);

    const showCarrouselControllers = data.length > 1;

    return (
        <div className="carrousel__container">
            <MapList
                data={data}
                container_Class="carrousel__items"
                component_Class="carrousel__item"
                isDiv
                isComponent
                component={({ data, index }) => (
                    <SlideCarrousel
                        backgroundImage={data}
                        className="carrousel__picture"
                        currentSlide={currentSlide}
                        index={index}
                    />
                )}
            />
            {showCarrouselControllers && (
                <CarrouselControllers
                    slides={data}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                />
            )}
        </div>
    );
};

const SlideCarrousel = ({
    index,
    currentSlide,
    backgroundImage,
    className,
}) => {
    return (
        <div
            className={`${className} ${currentSlide === index ? 'active' : ''}`}
            style={{
                // Image de la slide
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : null,
                // Animation permettant de changer de slide
                transform: `translateX(${currentSlide * -100}%)`, // 100% = slide width
            }}
            data-testid="slide-carrousel"
        ></div>
    );
};

const CarrouselControllers = ({ slides, currentSlide, setCurrentSlide }) => {
    // Usage de modulo pour boucler le carrousel
    const handleSlideLeft = () => {
        setCurrentSlide(
            (currentSlide) => (currentSlide + slides.length - 1) % slides.length
        );
    };

    const handleSlideRight = () => {
        setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    };

    // // Valeur de l'index dynamique
    // const handleDotClick = (index) => {
    //     setCurrentSlide(index);
    // };

    return (
        // Tous les icons sont définit en svg via CarrouselController
        <div
            className="carrousel-controllers"
            data-testid="carrousel-controllers"
        >
            <div className="carrousel-controllers__arrow">
                <CarrouselControllersIcons
                    className="carrousel-controllers__arrow--left"
                    icon="arrow-left"
                    onClick={handleSlideLeft}
                />
                <CarrouselControllersIcons
                    className="carrousel-controllers__arrow--right"
                    icon="arrow-right"
                    onClick={handleSlideRight}
                />
            </div>
            <div className="carrousel-controllers__counter">
                {/* Le +1 compose le départ de 0 */}
                {currentSlide + 1}/{slides.length}
            </div>
            {/* Affichage alternatif sous forme de points cliquables */}
            {/* <MapList
                data={slides}
                container_Class="carrousel-controllers__dots-list"
                isComponent={true}
                component_Class="carrousel-controllers__dots-list--dot"
                component={({ index }) => (
                    <CarrouselControllersIcons
                        icon="dots"
                        onClick={() => handleDotClick(index)}
                    />
                )}
            /> */}
        </div>
    );
};

Carrousel.propTypes = {
    data: PropTypes.array.isRequired,
};

SlideCarrousel.propTypes = {
    className: PropTypes.string,
    backgroundImage: PropTypes.string,
    currentSlide: PropTypes.number,
    index: PropTypes.number,
    setCurrentSlide: PropTypes.any,
};

CarrouselControllers.propTypes = {
    slides: PropTypes.array.isRequired,
    currentSlide: PropTypes.number,
    setCurrentSlide: PropTypes.func,
};

export default Carrousel;
