import * as React from 'react';
import http from '../http';

export default function useGet(endPoint) {

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const getData = async () => {

        setData(null);
        setLoading(true);
        setError(false);

        try {
            const res = await http.get(endPoint);
            setData(res);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }

    }

    React.useEffect(() => {
        getData();
    }, [endPoint]);

    return { data, loading, error };

}