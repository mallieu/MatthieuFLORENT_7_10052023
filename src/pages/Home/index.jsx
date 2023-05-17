import BlocAnnonce from '../../components/ListeLogements';

function Home() {
    return (
        <>
            <Banner />
            <BlocAnnonce />
        </>
    );
}

function Banner() {
    return (
        <div className="banner-homepage overlay-radius-l">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Home;
