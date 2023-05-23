import CardsLogement from '../../components/CardsLogements/CardsLogements';
import Banner from '../../components/Banners/Banner';

const Home = () => (
    <>
        <Banner
            className="banner--250px overlay-banner"
            title="Chez vous, partout et ailleurs"
        />
        <CardsLogement />
    </>
);

export default Home;
