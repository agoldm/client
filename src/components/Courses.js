import * as React from 'react';

import useGet from '../api/hooks/useGet';
import { Grid, Card, Box, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import usePost from '../api/hooks/usePost';
import Context from '../context';
let loadingGif = require("../loading.gif");
let errorgGif = require("../error.gif");
function Courses() {

    const { data, loading, error } = useGet("courses");
    const addFavorite = usePost("users/favorite-course");
    const { role,setFavoriteChange } = React.useContext(Context);

    const courseAdd = (itemId) => {
        addFavorite.getData({ courseId: itemId });
    }

    if (loading) {
        return (
            <Grid item xs={7}>
                <img style={{ alignSelf: 'center' }} src={loadingGif} alt="wait until the page loads" />
            </Grid>
        );
    }
    if (error) {
        return (
            <Grid item xs={7}>
                <img style={{ alignSelf: 'center' }} src={errorgGif} alt="wait until the page loads" />
            </Grid>
        )
    }
    return (
        <Box sx={{ width: 0.9, m: 'auto' }}>
            <Grid container spacing={6}>
                {/* // <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}> */}
                {
                    data.map((item) => (
                        <Grid key={item._id} item xs={16} sm={6} md={4} lg={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={`http://localhost:8080/${item.image}`}
                                        image={`http://localhost:8080//${item.image}`}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{ minHeight: 220 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {(role == 'student') && <Button size="small" color="primary" onClick={(e) => {
                                        setFavoriteChange(old=>old+1);
                                        courseAdd(item._id)
                                    }} >
                                        הירשם
                                    </Button>
                                    }
                                    {/* {(role == 'student') && <Box sx={{ alignItems: 'left', mx: 15 }}>
                                        <FavoriteBorderOutlinedIcon />
                                    </Box>
                                    } */}
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