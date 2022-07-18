import React from "react";

import { Box, TextField, Button, Stack, Typography, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Login({ open, setOpen }) {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginSubmit = () => {
        let user = { username, password };
        console.log(user);
    }

    return (
        <Dialog open={open}>
            <DialogTitle>התחברות</DialogTitle>
            <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>

                <Box sx={{ width: 1 }}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{ width: 1, height: 1 }}>
                        <TextField onChange={(e) => setUsername(e.target.value)} label="שם משתמש" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} label="סיסמה" type='password' variant="outlined" />
                        <Button onClick={loginSubmit} variant="contained">כניסה</Button>
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Login;