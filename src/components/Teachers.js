import * as React from 'react';
import useGet from '../api/hooks/useGet';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Typography, Paper } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '128px',
    height: '128px',
});
function createData(name, age, gender, country) {
    return { name, age, gender, country };
}

function Teachers() {

    const { data, loading, error } = useGet("users/teachers");

    console.log(data);
    console.log(loading);

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
                    {/* <Box sx={{ width: '100%', border: '1px dashed grey' }}> */}
                    <Grid container spacing={5}>
                        <Grid item xs={2}>
                            <Paper elevation={4}>
                                <ButtonBase sx={{ width: 1, height: 1 }}>
                                    <Img alt="complex" src="./images/user_profile.png" />
                                </ButtonBase>
                            </Paper>
                        </Grid>
                        <Grid item xs={10}>
                            <Paper elevation={4}>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {i.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {i.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {i.email}
                                </Typography>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    {i.gender}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            ))}

        </div >
    );
}
export default Teachers;