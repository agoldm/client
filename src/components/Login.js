import React, { useEffect } from "react";

import { Box, TextField, Button, Alert, Stack, Typography, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import usePost from '../api/hooks/usePost';
import { crypt } from "../utils/helper"
import Context from "../context";

function Login({ open, setOpen }) {

    const { setUser } = React.useContext(Context);

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { getData, data, loading, error, setError } = usePost("login");

    const loginSubmit = (e) => {
        e.preventDefault();
        getData({ username, password: crypt.encrypt(password) });
    }
    //לעדכן בקונטקסט אישור יוזר
    useEffect(() => {
        setUser(null)
        if (data && data.login) {
            setUser(data)
            setOpen(false)
        }
    }, [data]);
    
    return (
        <Dialog open={open}>
            <DialogTitle>התחברות</DialogTitle>
            <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Box sx={{ width: 1 }}>
                    <form onSubmit={loginSubmit}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ width: 1, height: 1 }}>
                            {error && <Alert variant="filled" severity="error">
                                שם משתמש או סיסמא לא נכונים
                            </Alert>}
                            <TextField onChange={(e) => setUsername(e.target.value)} label="שם משתמש" variant="outlined" />
                            <TextField onChange={(e) => setPassword(e.target.value)} label="סיסמה" type='password' variant="outlined" />
                            <Button type="submit" variant="contained">כניסה</Button>
                        </Stack>
                    </form>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default Login;