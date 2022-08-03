import * as React from 'react';
import useGet from '../api/hooks/useGet';
import usePost from '../api/hooks/usePost';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, Button, IconButton, Drawer, Alert, Stack, CircularProgress } from '@mui/material';
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

    const { getData, data, loading, error } = useGet("users/favorite-course");
    const signCourse = usePost("courses/signCourse");
    const deleteFavoriteCourse = useDelete("users/favorite-course");

    const courseAdd = async (courseId) => {
        await signCourse.getData({ courseId: courseId });
        await deleteFavoriteCourse.getData({ courseId: courseId });
        getData()
    }
    const courseDelete = async (courseId) => {
        await deleteFavoriteCourse.getData({ courseId: courseId });
        getData()
    }

    React.useEffect(() => {
        getData()
    }, [open])

    return (
        <Drawer anchor='right' open={open} sx={{ zIndex: 1500 }}>
            <Box sx={{ width: '30vw', mt: 7 }}>
                <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, left: 6 }}>
                    <CloseIcon />
                </IconButton>
                {error && <Alert >XX</Alert>}
                {loading && <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: 1, height: 500 }}
                ><CircularProgress /></Stack>}
                {data && data.map((i, index) => (
                    <Box key={index} sx={{ width: 1, p: 1, my: 5 }}>
                        <Paper elevation={0} sx={{ p: 1 }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}>
                                <Typography variant="subtitle1">
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
                            </Stack>
                        </Paper>

                    </Box>

                ))}
            </Box>
        </Drawer >
    );
}
export default FavoriteCourses;