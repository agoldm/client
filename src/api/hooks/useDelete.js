import React from "react";
import http from '../http';

// react hook to delete data from backend
export default function useDelete(endpoint, body = null) {

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const getData = async (body) => {
        try {
            const res = await http.delete(endpoint, body);
            setData(res);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        getData();
    }, [endpoint]);
    return { getData, data, loading, error };
}
