import * as React from 'react';
import useGet from '../api/hooks/useGet';
import { Grid, Card, Box, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function Courses() {
    const { data, loading, error } = useGet("courses");

    console.log(data);
    console.log(loading);

    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    return (
        <Box sx={{ width: 0.9, m: 'auto' }}>
            <Grid container spacing={4}>
                {/* // <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}> */}
                {
                    data.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                {/* <ImageListItem key={item.img}> */}
                                {/* <img
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                /> */}
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`${item.image}?w=161&fit=crop&auto=format`}
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
                                        Share
                                    </Button>
                                </CardActions>
                                {/* </ImageListItem> */}
                            </Card>
                        </Grid>
                    ))
                }
                {/* // </ImageList> */}
            </Grid>
        </Box>
    );
}
export default Courses;