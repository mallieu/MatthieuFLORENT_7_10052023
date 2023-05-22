import CardsLogement from '../../components/CardsLogements';

function Home() {
    return (
        <>
            <BannerHomepage />
            <CardsLogement />
        </>
    );
}

function BannerHomepage() {
    return (
        <div className="banner--homepage overlay-radius-l">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Home;
