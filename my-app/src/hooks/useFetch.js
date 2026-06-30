import { useState, useEffect } from "react";

function useFetch (url)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        //que tiene que ver la practica isMounted = true?
        let isMounted = true;
        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if(!res.ok) throw new Error('Error en acceder los datos');
                return res.json();
            })
            // que hace aqui? en set lading deja de cargar por ponerle false?
            .then((data) => {
                if (isMounted) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            });

            return () => {isMounted = false;};
    }, [url]);

    return {data, loading, error};
};

