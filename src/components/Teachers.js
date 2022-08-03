import * as React from 'react';
import useGet from '../api/hooks/useGet';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Typography, Paper, Card, CardMedia, CardContent } from '@mui/material';
import Skeleton from '@mui/material/Skeleton'
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '128px',
    height: '128px',
    maxWidth: '100%'
});
function Teachers() {

    const { data, loading, error } = useGet("users/teachers");

    if (loading) {
        return (<p><Skeleton
            shape="rectangle"
            sx={{ width: 1, height: 1, m: 5 }}
        /></p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    return (
        <div>
            {data.map((i) => (
                <Card key={i._id} sx={{ display: 'flex', mb: 10 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, height: 151 }}
                        image={`http://localhost:8080/${i.image}`}
                        alt="Live from space album cover"
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
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
                    </CardContent>
                </Card>
                // <Paper elevation={4} sx={{ my: 10 }}>
                //     <Grid container alignItems='center' spacing={5}>
                //         <Grid item xs={2}>
                //             <ButtonBase>
                //                 <Img alt="complex" src={`http://localhost:8080/${i.image}`} />
                //             </ButtonBase>
                //         </Grid>
                //         <Grid item xs={10}>

                //         </Grid>
                //     </Grid>
                // </Paper>
            ))
            }

        </div >
    );
}
export default Teachers;