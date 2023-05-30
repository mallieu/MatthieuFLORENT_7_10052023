import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carrousel from './Carrousel';

describe('Carrousel', () => {
    const data = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    // Vérifie que le Carrousel se génère
    it('Carrousel - se rend sans erreur', () => {
        render(<Carrousel data={data} />);
    });

    // Vérifie que les slides sont affichées correctement en fonction des données fournies
    it('Carrousel - affiche les slides en fonction des données fournies', () => {
        render(<Carrousel data={data} />);
        const slideCarrousels = screen.getAllByTestId('slide-carrousel');
        expect(slideCarrousels).toHaveLength(data.length);
        slideCarrousels.forEach((slideCarrousel, index) => {
            expect(slideCarrousel.style.backgroundImage).toContain(data[index]); // Correspondance ici
        });
    });

    // Vérifie que les contrôleurs du carrousel sont affichés s'il y a plus d'un slide
    it("Carrousel - affiche les contrôleurs du carrousel s'il y a plus d'un slide", () => {
        render(<Carrousel data={data} />);
        const carrouselControllers = screen.getByTestId(
            'carrousel-controllers'
        );
        expect(carrouselControllers).toBeInTheDocument(); // Comportement usuel
    });

    // Vérifie que les contrôleurs du carrousel ne sont pas affichés s'il y a seulement une slide
    it("Carrousel - n'affiche pas les contrôleurs du carrousel s'il y a seulement un slide", () => {
        render(<Carrousel data={['image1.jpg']} />); // data modifiée
        const carrouselControllers = screen.queryByTestId(
            'carrousel-controllers'
        );
        expect(carrouselControllers).toBeNull();
    });
});
