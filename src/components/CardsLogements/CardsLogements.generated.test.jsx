import renderer from 'react-test-renderer';
import useAPICall from '../../assets/API/API';
import { MapList } from '../../components/Helpers/Helpers';
import ListeAnnonces from './CardsLogements';

jest.mock('../../assets/API/API');
jest.mock('../../components/Helpers/Helpers');

const renderTree = (tree) => renderer.create(tree);
describe('<ListeAnnonces>', () => {
    it('ListeAnnonces - should render component <ListAnnonces />', () => {
        expect(renderTree(<ListeAnnonces />).toJSON()).toMatchSnapshot();
    });
});
