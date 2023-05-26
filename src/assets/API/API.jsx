import { useState, useEffect } from 'react';

// Permet de faire appel aux données de l'API
function useAPICall(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [url]);

    return data;
}

export default useAPICall;
