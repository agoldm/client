import * as React from 'react';

import useGet from '../api/hooks/useGet';
import { Grid, Card, Box, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from '@mui/material/styles';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '128px',
    height: '128px',
    maxWidth: '100%',
    display: "block"
});
function Courses() {

    const { data, loading, error } = useGet("courses");

    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        console.log(data);
        return (<p>error..</p>)
    }
    return (
        <Box sx={{ width: 0.9, m: 'auto' }}>
            <Grid container spacing={6}>
                {/* // <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}> */}
                {
                    data.map((item) => (
                        <Grid item xs={16} sm={6} md={4} lg={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={`http://localhost:8080/${item.image}`}
                                        image={`http://localhost:8080//${item.image}`}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        הירשם
                                    </Button>
                                    <Box sx={{ alignItems: 'left',mx: 15}}>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}
export default Courses;