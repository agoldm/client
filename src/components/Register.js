import React from "react";

import { Box, TextField, Button, Stack, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import terms from "../constants/terms"
import usePost from '../api/hooks/usePost';
function Register({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [error, setError] = React.useState(false);


    const registerSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return setError(true);
        let user = { name, email, username, password, confirmPassword };
        setError(false);
        console.log(user);
    }

    return (
        <Dialog fullWidth open={open}>
            <DialogTitle>הרשמה</DialogTitle>
            <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Box sx={{ width: 1 }}>
                    <form onSubmit={registerSubmit}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ width: 1, height: 1 }}>

                            <TextField onChange={(e) => setName(e.target.value)} label="שם מלא" variant="outlined" />
                            <TextField onChange={(e) => setEmail(e.target.value)} label="אימייל" type='email' variant="outlined" />
                            <TextField onChange={(e) => setUsername(e.target.value)} label={terms("username")} variant="outlined" />
                            <TextField error={error} onChange={(e) => setPassword(e.target.value)} label="סיסמה" type='password' variant="outlined" />
                            <TextField error={error} onChange={(e) => setConfirmPassword(e.target.value)} label="אימות סיסמה" type='password' variant="outlined" />
                            <Button type='submit' variant="contained">כניסה</Button>
                        </Stack>
                    </form>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Register;