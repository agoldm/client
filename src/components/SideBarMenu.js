import * as React from 'react';
import { useNavigate } from 'react-router-dom'

import { Box, MenuList, MenuItem, Grid, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolIcon from '@mui/icons-material/School';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Context from '../context';
function SideBarMenu() {

    let navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { role } = React.useContext(Context);
    const itemsList = [
        {
            lable: "דף הבית",
            to: "/",
            icon: <HomeOutlinedIcon />,
            role: ""
        }];
    {
        (role == 'student') && itemsList.push({
            lable: "השיעורים שלי",
            to: "/student-courses",
            icon: <BackpackOutlinedIcon />,
            role: ""
        })
    };

    {
        (role == 'student') && itemsList.push({
            lable: "המורים שלי",
            to: "/student-deshboard",
            icon: <SchoolIcon />,
            role: ""
        })
    };

    {
        (role == 'teacher') && itemsList.push({
            lable: "התלמידים שלי",
            to: "/my-students",
            icon: <SchoolIcon />,
            role: ""
        })
    };

    {
        (role == 'teacher') && itemsList.push({
            lable: "ניהול קורסיםּ",
            to: "/teacher-deshboard",
            icon: <AssignmentTurnedInOutlinedIcon />,
            role: ""
        })
    };

    return (
        <Box sx={{ width: '100%', pt: 10, pr: 5, bgcolor: '#EBF2FF', height: 1 }}>
            <MenuList sx={{ width: 1 }}>
                {itemsList.map((item, index) => {
                    return (
                        <MenuItem key={index} onClick={() => navigate(item.to)}>
                            <Grid container alignItems="center" sx={{ width: 1, height: 1 }}>
                                <Grid item xs={3} sx={{ mt: 0.5 }}>
                                    {item.icon}
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography align='left' variant='subtitle2'>{item.lable}</Typography>
                                </Grid>
                            </Grid>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Box>
    );
}


export default SideBarMenu;