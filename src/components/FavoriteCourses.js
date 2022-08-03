import * as React from 'react';
import useGet from '../api/hooks/useGet';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, Button, SwipeableDrawer } from '@mui/material';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '128px',
    height: '128px',
    maxWidth: '100%',
    display: "block"
});
function FavoriteCourses() {

    const { data, loading, error } = useGet("users/favorite-course");

    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }

    return (
        <div>

            {data.map((i) => (
                <Box sx={{ width: 0.9, m: 5 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={10}>
                            <Paper elevation={4}>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {i.name}

                                </Typography>
                                <Button color="primary" size="small"
                                // onClick={() => setLoginDialog(true)}
                                >
                                    מחיקה
                                </Button>
                                <Button variant="contained" color="primary" size="small"
                                // onClick={() => setRegisterDialog(true)}
                                >
                                    הרשמה
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            ))}
        </div >
    );
}
export default FavoriteCourses;