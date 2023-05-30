import renderer from 'react-test-renderer';
import Banner from './Banner';

const renderTree = (tree) => renderer.create(tree);
describe('<Banner>', () => {
    it('Banner - should render component <Banner />', () => {
        expect(renderTree(<Banner />).toJSON()).toMatchSnapshot();
    });
    it('Banner - should render component with props', () => {
        expect(
            renderTree(
                <Banner
                    className={'banner'}
                    title={'Je suis un test'}
                    HasBackgroundImage={'image.jpg'}
                />
            ).toJSON()
        ).toMatchSnapshot();
    });
});
