import React from "react";
import http from '../http';

// react hook to post data from backend
export default function usePost(endpoint, body = null){
        
        const [data, setData] = React.useState(null);
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState(false);

        const [bodyS, setBodyS] = React.useState(body);
        React.useEffect(() => {
            setBodyS(body)
        },[body])
        
        const getData = async () => {
            setLoading(true);
            try {
                const res = await http.post(endpoint, body);
                setData(res);
                setLoading(false);
                setError(false);
            } catch (err) {
                setData(null);
                setError(true);
                setLoading(false);
            }  
        }

        return { getData, data, loading, error };
    }
