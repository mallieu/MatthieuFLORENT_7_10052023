import useAPICall from '../../assets/API/API';

function ListeAnnonces() {
    const data = useAPICall('/data.json');

    return (
        <>
            <div className="container__card-appartment">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="card-appartment overlay-cards"
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
            </div>
        </>
    );
}

export default ListeAnnonces;
