import * as React from 'react';
import { Grid, Card, Box, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    }
]
function Courses() {
    return (
        <Box sx={{ width: 0.9, m: 'auto' }}>
            <Grid container spacing={4}>
                {/* // <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}> */}
                {
                    itemData.map((item) => (
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
                                        image={`${item.img}?w=161&fit=crop&auto=format`}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
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