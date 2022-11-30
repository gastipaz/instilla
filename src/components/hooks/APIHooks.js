import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setData(response?.data)
                setLoading(false);
            } catch (error) {
                console.log(error);
                setData(null)
                setLoading(false);
            }
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return [data, Loading];
}