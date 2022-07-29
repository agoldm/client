import React, { useEffect } from "react";

import { Box, TextField, Button, Stack, Dialog, DialogTitle, DialogContent, IconButton, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import terms from "../constants/terms"
import usePost from '../api/hooks/usePost';
import { crypt } from "../utils/helper"
import useGet from "../api/hooks/useGet";

function Profile({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const { getData, data, loading, error, setError } = useGet("users/profile");
    console.log(data);

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
                    <Button type='submit' variant="contained">כניסה</Button>
                </Stack>
            </form>
        </Box>

    );
}

export default Profile;