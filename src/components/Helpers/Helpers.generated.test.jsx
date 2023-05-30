import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';
import { MapList } from './Helpers';

describe('MapList', () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];

    it("MapList - rend une liste d'éléments", () => {
        const { getAllByRole } = render(
            <MapList
                data={data}
                container_Class="container"
                component_Class="item"
            />
        );

        const items = getAllByRole('listitem');
        expect(items).toHaveLength(data.length);

        items.forEach((item, index) => {
            expect(item).toHaveTextContent(data[index]);
        });
    });

    it('MapList - rend des éléments div si la prop isDiv est true', () => {
        const { getAllByRole } = render(
            <MapList
                data={data}
                container_Class="container"
                component_Class="item"
                isDiv
            />
        );

        const divs = getAllByRole('listitem');
        expect(divs).toHaveLength(data.length);

        divs.forEach((div, index) => {
            expect(div.tagName.toLowerCase()).toBe('div');
            expect(div).toHaveTextContent(data[index]);
        });
    });

    it('MapList - rend un composant personnalisé si la prop isComponent est true', () => {
        const TestComponent = ({ index }) => {
            return (
                <div data-testid="TestComponent">{`Component ${
                    index + 1
                }`}</div>
            );
        };
        TestComponent.propTypes = {
            index: PropTypes.number.isRequired,
        };

        const { getAllByTestId } = render(
            <MapList
                data={data}
                container_Class="container"
                component_Class="item"
                isComponent
                component={({ index }) => <TestComponent index={index} />}
            />
        );

        const customComponents = getAllByTestId('TestComponent');
        expect(customComponents).toHaveLength(data.length);

        customComponents.forEach((component, index) => {
            expect(component.tagName.toLowerCase()).toBe('div');
            expect(component).toHaveTextContent(`Component ${index + 1}`);
        });
    });
});
