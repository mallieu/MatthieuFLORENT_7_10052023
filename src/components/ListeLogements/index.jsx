import useAPICall from '../../assets/images/API/API';

function BlocAnnonce() {
    const data = useAPICall('/data.json');

    return (
        <div className="container">
            <GenerationBlocLogement data={data} />
        </div>
    );
}

export default BlocAnnonce;

function GenerationBlocLogement({ data }) {
    return (
        <>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="brique-logement overlay-radius-s"
                    style={{ backgroundImage: `url(${item.cover})` }}
                >
                    <a
                        href={`/fiche-logement/${item.id}`}
                        className="clickable-div"
                    >
                        <h2>{item.title}</h2>
                    </a>
                </div>
            ))}
        </>
    );
}
