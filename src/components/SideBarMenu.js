import * as React from 'react';
import { useNavigate } from 'react-router-dom'

import { Box, Menu, MenuList, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

function SideBarMenu() {

    let navigate=useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const itemsList = [
        {
            lable: "דף הבית",
            to: "/",
            icon: "",
            role: ""
        },
        {
            lable: "השיעורים שלי",
            to: "/",
            icon: "",
            role: ""
        },
        {
            lable: "המורים שלי",
            to: "/",
            icon: "",
            role: ""
        },
        {
            lable:"ניהול קורסיםּ",
            to: "/teacher-deshboard",
            icon: "",
            role: ""
        },
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <MenuList>
                {itemsList.map((item, index) => {
                    return (
                        <MenuItem key={index} onClick={()=>navigate(item.to)}>
                            <ListItemIcon>
                                <DashboardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>{item.lable}</ListItemText>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Box>
    );
}


export default SideBarMenu;