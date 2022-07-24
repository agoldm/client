import React, { useEffect } from "react";

import { Box, TextField, Button, Stack, Dialog, DialogTitle, DialogContent, IconButton, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import terms from "../constants/terms"
import usePost from '../api/hooks/usePost';
import { crypt } from "../utils/helper"

function Register({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const { getData, data, loading, error, setError } = usePost("register");

    const registerSubmit = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) return setError(true);

        getData({ name, email, username, password: crypt.encrypt(password) });

    }
    useEffect(() => {
        setTimeout(() => {
            if (data && data.success) setOpen(false)
        }, 3000);

    }, [data]);
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
                            sx={{ width: 1, height: 1 }}
                        >
                            {error && <Alert variant="filled" severity="error">
                                שם משתמש או סיסמא לא נכונים
                            </Alert>}
                            {(data && data.success) && <Alert variant="filled" severity="success">
                                נרשמת בהצלחה
                            </Alert>}
                            <TextField onChange={(e) => setName(e.target.value)} required label="שם מלא" variant="outlined" />
                            <TextField onChange={(e) => setEmail(e.target.value)} required label="אימייל" type='email' variant="outlined" />
                            <TextField onChange={(e) => setUsername(e.target.value)} required label={terms("username")} variant="outlined" />
                            <TextField error={error} onChange={(e) => setPassword(e.target.value)} required label="סיסמה" type='password' variant="outlined" />
                            <TextField error={error} onChange={(e) => setConfirmPassword(e.target.value)} required label="אימות סיסמה" type='password' variant="outlined" />
                            <Button type='submit' variant="contained">כניסה</Button>
                        </Stack>
                    </form>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Register;