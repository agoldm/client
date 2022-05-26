import React from "react";

import { Box, TextField, Button, Stack, Typography } from "@mui/material";

function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginSubmit = () => {
        let user = {username, password};
        console.log(user);
    }

    return (
        <Box sx={{ width: 1, height: '100vh' }}>
            <Stack
             direction="column"
             justifyContent="center"
             alignItems="center"
             spacing={2}
             sx={{width:1,height:1}}>
                <Typography variant="h3">התחברות</Typography>
                <TextField onChange={(e) => setUsername(e.target.value)} label="שם משתמש" variant="outlined" />
                <TextField onChange={(e) => setPassword(e.target.value)} label="סיסמה" type='password' variant="outlined" />
                <Button onClick={loginSubmit} variant="contained">כניסה</Button>
            </Stack>
        </Box>
    );
}

export default Login;