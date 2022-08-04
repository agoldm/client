import { Badge, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import useGet from "../api/hooks/useGet";
import Context from "../context";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
function FavoriteNumber({ setFavoriteOpen }) {

    const theme = useTheme();

    const { user, favoriteChange } = React.useContext(Context);
    const { getData, data, loading, error } = useGet("users/favorite-course");

    const [favoriteCount, setFavoriteCount] = React.useState(0);
    React.useEffect(() => {
        if (data) setFavoriteCount(data.length)
    }, [data]);
    React.useEffect(() => {
        getData();
    }, [favoriteChange]);

    return (
        <IconButton onClick={() => setFavoriteOpen(true)}>
            <Badge anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={favoriteCount} color="secondary">
                <AddShoppingCartOutlinedIcon color="secondary" />
            </Badge>
        </IconButton>
    );
}
export default FavoriteNumber;