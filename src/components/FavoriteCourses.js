import * as React from 'react';
import useGet from '../api/hooks/useGet';
import usePost from '../api/hooks/usePost';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, Button, IconButton, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useDelete from '../api/hooks/useDelete';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '128px',
    height: '128px',
    maxWidth: '100%',
    display: "block"
});
function FavoriteCourses({ open, setOpen }) {

    const { data, loading, error } = useGet("users/favorite-course");
    const signCourse = usePost("courses/signCourse");
    const deleteFavoriteCourse = useDelete("users/favorite-course");
    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    const courseAdd = async (courseId) => {
        await signCourse.getData({ courseId: courseId });
        await deleteFavoriteCourse.getData({ courseId: courseId });
    }
    const courseDelete = async (courseId) => {
        await deleteFavoriteCourse.getData({ courseId: courseId });
    }
    return (
        <Drawer anchor='right' open={open} sx={{ zIndex: 1500 }}>
            <Box sx={{ width: '30vw', mt: 7 }}>
                <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, left: 6 }}>
                    <CloseIcon />
                </IconButton>
                {data.map((i) => (
                    <Box sx={{ width: 0.9, m: 5 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={10}>
                                <Paper elevation={4}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {i.name}

                                    </Typography>
                                    <Button color="primary" size="small"
                                    onClick={(e) => courseDelete(i._id)}
                                    >
                                        מחיקה
                                    </Button>
                                    <Button variant="contained" color="primary" size="small"
                                        onClick={(e) => courseAdd(i._id)}
                                    >
                                        הרשמה
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>

                ))}
            </Box>
        </Drawer >
    );
}
export default FavoriteCourses;