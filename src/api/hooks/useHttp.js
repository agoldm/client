import React from "react";
import http from '../http';

// react hook to post data from backend
export default function useHttp(endpoint, method = "POST") {

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const init = () => {
        setLoading(false);
        setData(null);
        setError(false);
    }

    const getData = async (body) => {
        setLoading(true);
        setData(null);
        setError(false);
        try {
            let res;
            switch (method) {
                case 'POST':
                    res = await http.post(endpoint, body)
                    break;
                case 'PUT':
                    res = await http.put(endpoint, body)
                    break;
                default:
                    res = await http.post(endpoint, body)
                    break;
            }
            setData(res);
            setLoading(false);
            setError(false);
        } catch (err) {
            setData(null);
            setError(true);
            setLoading(false);
        }
    }

    return { getData, data, loading, error, setError, init };
}
