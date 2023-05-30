import React from 'react';
import { render } from '@testing-library/react';
import Carrousel from './Carrousel';

describe('Carrousel', () => {
    const data = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    it('Carrousel - renders without crashing', () => {
        render(<Carrousel data={data} />);
    });

    it('Carrousel - displays slides based on the provided data', () => {
        const { getAllByTestId } = render(<Carrousel data={data} />);
        const slideCarrousels = getAllByTestId('slide-carrousel');
        expect(slideCarrousels).toHaveLength(data.length);
        slideCarrousels.forEach((slideCarrousel, index) => {
            expect(slideCarrousel.style.backgroundImage).toContain(data[index]);
        });
    });

    it('Carrousel - displays carrousel controllers if there is more than one slide', () => {
        const { getByTestId } = render(<Carrousel data={data} />);
        const carrouselControllers = getByTestId('carrousel-controllers');
        expect(carrouselControllers).toBeInTheDocument();
    });

    it('Carrousel - does not display carrousel controllers if there is only one slide', () => {
        const { queryByTestId } = render(<Carrousel data={['image1.jpg']} />);
        const carrouselControllers = queryByTestId('carrousel-controllers');
        expect(carrouselControllers).toBeNull();
    });
});
