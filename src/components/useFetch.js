import { useEffect, useState } from "react";

/** 
 * Hook para hacer llamadas asincronas a una api
 * 
 * @hook
 * @param {string} url - la url del endpoint a usar
 */

export default function useFetch(url) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    return { data }
}

