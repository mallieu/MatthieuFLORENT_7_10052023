import renderer from 'react-test-renderer';
import { useState } from 'react';
import CollapseModuleToggle from '../../assets/icons/CollapseModuleToggle';
import CollapseModule from './CollapseModule';

jest.mock('../../assets/icons/CollapseModuleToggle');

const renderTree = (tree) => renderer.create(tree);
describe('<CollapseModule>', () => {
    it('should render component', () => {
        expect(renderTree(<CollapseModule />).toJSON()).toMatchSnapshot();
    });
    it('should render component with props', () => {
        expect(
            renderTree(
                <CollapseModule
                    title={'Mon test'}
                    content={'Mon contenu de test'}
                />
            ).toJSON()
        ).toMatchSnapshot();
    });
});
