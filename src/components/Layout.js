import React from "react";
import { Outlet } from 'react-router-dom';

import { Box, Typography, Stack, Grid, Container, AppBar, Button } from '@mui/material';
import AccountMenu from "./AccountMenu";
import NavTabs from "./NavTabs";
import SideBarMenu from "./SideBarMenu";
import { useTheme } from '@mui/material/styles';
import Login from "./Login";
import Register from "./Register";

function Layout() {
    const theme = useTheme();

    const [loginDialog, setLoginDialog] = React.useState(false);
    const [registerDialog, setRegisterDialog] = React.useState(false);

    return (
        <Box sx={{ height: "100vh", width: 1, overflow: 'hidden' }}>
            <header style={{
                height: '10vh',
                width: '100%'
            }} >
                <Login open={loginDialog} setOpen={setLoginDialog} />
                <Register open={registerDialog} setOpen={setRegisterDialog} />
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
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ height: 0.5 }}>
                        <Button color="secondary" size="small" onClick={() => setLoginDialog(true)}>
                            התחברות
                        </Button>
                        <Button variant="contained" color="secondary" size="small" onClick={() => setRegisterDialog(true)}>
                            הרשמה
                        </Button>
                        <AccountMenu />
                    </Stack>
                </Stack>
            </header>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item xs={12} lg={2} sx={{
                    bgcolor: '#EBF2FF',
                    zIndex: 10
                }}>
                    <SideBarMenu />
                </Grid>
                <Grid item xs={12} lg={10} sx={{ overflowY: 'auto' }}>
                    <Container>
                        <Box component='main' sx={{ width: 1, minHeight: '75vh' }}>
                            <Outlet />
                        </Box>
                        <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0, border: "none", boxShadow: "none", zIndex: 1 }}>
                            <Box component='footer' sx={{ width: 1 }}>
                                <Typography variant="subtitle1" align="center" sx={{ width: 1, color: theme.palette.fourth.main }}>
                                    Shira Doron & Avital Goldman &copy; 2022
                                </Typography>
                            </Box>
                        </AppBar>
                    </Container>
                </Grid>
            </Grid>

        </Box >
    );
}

export default Layout;