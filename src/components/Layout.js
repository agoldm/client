import React from "react";
import { Outlet } from 'react-router-dom';

import { Box, Typography, Stack, Grid } from '@mui/material';
import AccountMenu from "./AccountMenu";
import NavTabs from "./NavTabs";
import SideBarMenu from "./SideBarMenu";
import { useTheme } from '@mui/material/styles';

function Layout() {
    const theme = useTheme();
    return (
        <Box sx={{ height: "100vh", width: 1, overflow: 'hidden' }}>
            <header style={{
                height: '10vh',
                width: '100%'
            }} >
                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} sx={{
                    width: 1,
                    height: 1,
                    bgcolor: "primary.main"
                }}>
                    <Box>
                        <Typography variant="h4" sx={{ ml: 1, color: theme.palette.fifth.main }}>
                            לוגו
                        </Typography>
                    </Box>
                    <Box>
                        <NavTabs />
                    </Box>
                    <Box>
                        {/* <IconButton color="secondary" sx={{ mx: 1 }}>
                            <EmailIcon />
                        </IconButton> */}
                        {/* <IconButton color="secondary" sx={{ mx: 1 }}>
                            <AccountCircleIcon />
                        </IconButton> */}
                        <AccountMenu />
                    </Box>
                </Stack>
            </header>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item xs={12} lg={2} sx={{
                    bgcolor: '#EBF2FF',
                }}>
                    <SideBarMenu />
                </Grid>
                <Grid item xs={12} lg={10} sx={{ overflowY: 'auto' }}>
                    <Box component='main' sx={{ width: 1, minHeight: '75vh' }}>
                        <Outlet />
                    </Box>
                    <Box component='footer' sx={{ width: 1 }}>
                        <Typography variant="h6" align="center" sx={{ width: 1, color: theme.palette.fourth.main }}>
                            Shira Doron & Avital Goldman &copy; 2022
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box >
    );
}

export default Layout;