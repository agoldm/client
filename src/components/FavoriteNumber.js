import { useTheme } from "@mui/material/styles";
import React from "react";
import useGet from "../api/hooks/useGet";
import Context from "../context";
function FavoriteNumber() {
    const theme = useTheme();
    const { user } = React.useContext(Context);
    const { getData, data, loading, error } = useGet("users/favorite-course");
    const [favoriteCount, setFavoriteCount] = React.useState("");
    React.useEffect(() => {
        // if (data) {
        //     setFavoriteCount(data.length)
        // }
        getData();
    }, [user]);
    return (
        <div style={{ color: theme.palette.primary.main, backgroundColor: theme.palette.secondary.main, display: 'flex', width: '30px', height: '30px', borderRadius: "50%" }} >
            <p style={{ margin: 'auto' }}>{favoriteCount}</p> 
        </div >
    );
}
export default FavoriteNumber;