import React from "react";

import { Box, TextField, Button, Stack, Typography } from "@mui/material";

import terms from "../constants/terms"

function Register() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [error, setError] = React.useState(false);

    const registerSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) return setError(true);
        let user = { name, email, username, password, confirmPassword };
        setError(false);
        console.log(user);
    }

    return (
        <Box sx={{ width: 1 }}>
            <form onSubmit={registerSubmit} style={{height: '100vh'}}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: 1, height: 1 }}>
                    <Typography variant="h3">התחברות</Typography>
                    <TextField onChange={(e) => setName(e.target.value)} label="שם מלא" variant="outlined" />
                    <TextField onChange={(e) => setEmail(e.target.value)} label="אימייל" type='email' variant="outlined" />
                    <TextField onChange={(e) => setUsername(e.target.value)} label={terms("username")} variant="outlined" />
                    <TextField error={error} onChange={(e) => setPassword(e.target.value)} label="סיסמה" type='password' variant="outlined" />
                    <TextField error={error} onChange={(e) => setConfirmPassword(e.target.value)} label="אימות סיסמה" type='password' variant="outlined" />
                    <Button type='submit' variant="contained">כניסה</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default Register;