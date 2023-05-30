import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import MapList from './MapList';

describe('MapList', () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];

    it('MapList - renders a list of items', () => {
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

    it('MapList - renders div elements if isDiv prop is true', () => {
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

    it('MapList - renders custom component if isComponent prop is true', () => {
        const CustomComponent = ({ data }) => <span>{data.toUpperCase()}</span>;

        CustomComponent.propTypes = {
            data: PropTypes.string.isRequired,
        };

        const { getAllByRole } = render(
            <MapList
                data={data}
                container_Class="container"
                component_Class="item"
                isComponent
                component={CustomComponent}
            />
        );

        const spans = getAllByRole('listitem');
        expect(spans).toHaveLength(data.length);

        spans.forEach((span, index) => {
            expect(span.tagName.toLowerCase()).toBe('span');
            expect(span).toHaveTextContent(data[index].toUpperCase());
        });
    });
});
