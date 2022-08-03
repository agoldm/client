import { useTheme } from "@mui/material/styles";
import React from "react";
import useGet from "../api/hooks/useGet";
import Context from "../context";
function FavoriteNumber() {
    const theme = useTheme();
    const { user } = React.useContext(Context);
    const { getData, data, loading, error } = useGet("users/favorite-course");
    return (
        <div style={{ color: theme.palette.primary.main, backgroundColor: theme.palette.secondary.main, display: 'flex', width: '30px', height: '30px', borderRadius: "50%" }} >
            {user && data && <p style={{ margin: 'auto' }}>{data.length}</p>}
        </div >
    );
}
export default FavoriteNumber;