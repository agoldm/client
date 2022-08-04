import React from "react";
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Grid, Container, AppBar, Button, Drawer, IconButton } from '@mui/material';
import AccountMenu from "./AccountMenu";
import NavTabs from "./NavTabs";
import SideBarMenu from "./SideBarMenu";
import { useTheme } from '@mui/material/styles';
import Login from "./Login";
import Register from "./Register";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Context from "../context";
import Chat from "./Chat";
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteCourses from "./FavoriteCourses";
import FavoriteNumber from "./FavoriteNumber";

function Layout() {

    const { user, role } = React.useContext(Context);
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        width: '170px',
        height: '70px',
    });
    const theme = useTheme();

    const [loginDialog, setLoginDialog] = React.useState(false);
    const [registerDialog, setRegisterDialog] = React.useState(false);
    const [chatDialog, setChatDialog] = React.useState(false);
    const [favoriteOpen, setFavoriteOpen] = React.useState(false);

    return (
        <Box>
            {user && <Fab size="large" color="primary" aria-label="chat" onClick={() => setChatDialog(true)} sx={{ position: 'fixed', right: 25, bottom: 25 }}>
                <ChatIcon />
            </Fab>}
            {user && <FavoriteCourses open={favoriteOpen} setOpen={setFavoriteOpen} />}
            <AppBar component="header" sx={{ zIndex: 1250 }}>
                <Login open={loginDialog} setOpen={setLoginDialog} />
                <Register open={registerDialog} setOpen={setRegisterDialog} />
                {user && <Chat open={chatDialog} setOpen={setChatDialog} />}
                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} sx={{
                    width: 1,
                    height: 1,
                    bgcolor: "primary.main"
                }}>
                    <Box>
                        <Img alt="complex" src="./logo_shugi.png" />
                    </Box>
                    <Box>
                        <NavTabs />
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ height: 0.5, mr: 2 }}>
                        {!user && <>
                            <Button color="secondary" size="small" onClick={() => setLoginDialog(true)}>
                                התחברות
                            </Button>
                            <Button variant="contained" color="secondary" size="small" onClick={() => setRegisterDialog(true)}>
                                הרשמה
                            </Button>
                        </>}
                        {user && <>


                            {(role == 'student') &&
                                <sup>
                                    <FavoriteNumber />
                                </sup>
                            }
                            {(role == 'student') &&
                                <IconButton onClick={() => setFavoriteOpen(true)}>
                                    <AddShoppingCartOutlinedIcon color="secondary" />
                                </IconButton>
                            }

                            <AccountMenu />

                        </>}
                    </Stack>
                </Stack>
            </AppBar>

            <Grid container sx={{ height: '90vh', pt: 15 }}>

                <Grid item xs={12} lg={1.5}>
                    <Drawer open={true} hideBackdrop elevation={0} variant="permanent">
                        <SideBarMenu />
                    </Drawer>
                </Grid>
                <Grid item xs={12} lg={10.5}>
                    <Container>
                        <Box component='main' sx={{ width: 1, pb: 20 }}>
                            {/* <ChatFab onClick={()}/> */}
                            {/* <Fab size="large" color="primary" aria-label="chat" onClick={() => setChatDialog(true)}>
                                <ChatIcon />
                            </Fab> */}
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