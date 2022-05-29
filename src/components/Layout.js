import React from "react";
import { Outlet } from 'react-router-dom';

import { Box, Typography, Stack, Grid } from '@mui/material';

function Layout() {
    return (
        <Box sx={{ height: "100vh", width: 1, overflow: 'hidden' }}>
            <header style={{
                height: '10vh',
                width: '100%'
            }} >
                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} sx={{ width: 1 }}>
                    <Box>
                        לוגו
                    </Box>
                    <Box>
                        תפריט
                    </Box>
                    <Box>
                        כניסה
                    </Box>
                </Stack>
            </header>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item xs={12} lg={2} sx={{
                    bgcolor: 'red',
                }}>
                    <aside>
                        תפריט צד
                    </aside>
                </Grid>
                <Grid item xs={12} lg={10} sx={{overflowY:'scroll'}}>
                    <main>
                        <Outlet />
                    </main>
                    <footer>
                        <Box sx={{ width: 1 }}>
                            <Typography variant="h6" align="center" sx={{ width: 1 }}>
                                Shira Doron & Avital Goldman &copy; 2022
                            </Typography>
                        </Box>
                    </footer>
                </Grid>
            </Grid>

        </Box >
    );
}

export default Layout;