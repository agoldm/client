import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Typography } from '@mui/material';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function createData(name, age, gender, country) {
    return { name, age, gender, country };
}
// add data
const teachers = [
    createData('John', 45, 'Male', 'Canada'),
    createData('Mary', 25, 'Female', 'London'),
    createData('Nick', 31, 'Male', 'America'),
    createData('Sunil', 65, 'Male', 'London'),
    createData('Rebecca', 51, 'Female', 'America'),
];
function Teachers() {
    return (
        <div>
            {teachers.map((i) => (
                <Box sx={{ width: '100%' , border: '1px dashed grey'}}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src="/public/user_profile.png" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {i.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {i.age}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {i.country}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        {i.gender}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            ))}

        </div >
    );
}
export default Teachers;