import React, { useEffect } from "react";

import { Box, TextField, Button, Stack, Alert } from "@mui/material";
import terms from "../constants/terms"
import useGet from "../api/hooks/useGet";
import useHttp from "../api/hooks/useHttp";

function Profile({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");

    const getProfile = useGet("users/profile");
    const updateProfile = useHttp('users/', 'PUT')


    const updateSubmit = (e) => {

        e.preventDefault();

        updateProfile.getData({ name, email, username });

    }

    useEffect(() => {

        if (getProfile.data && !getProfile.error) {
            setName(getProfile.data.name)
            setEmail(getProfile.data.email)
            setUsername(getProfile.data.username)
        }
    }, [getProfile.data]);

    return (

        <Box sx={{ width: 1 }}>
            <form onSubmit={updateSubmit}>
                <Stack

                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: 1, height: 1 }}
                >
                    {updateProfile.error && <Alert variant="filled" severity="error">
                        פרטים לא נכונים
                    </Alert>}
                    {(updateProfile.data && updateProfile.data.success) && <Alert variant="filled" severity="success">
                        נרשמת בהצלחה
                    </Alert>}
                    <TextField value={name} focused={!getProfile.error} onChange={(e) => setName(e.target.value)} required label="שם מלא" variant="outlined" />
                    <TextField value={email} focused={!getProfile.error} onChange={(e) => setEmail(e.target.value)} required label="אימייל" type='email' variant="outlined" />
                    <TextField value={username} focused={!getProfile.error} onChange={(e) => setUsername(e.target.value)} required label={terms("username")} variant="outlined" />
                    <Button type='submit' variant="contained">שמירה</Button>
                </Stack>
            </form>
        </Box>

    );
}

export default Profile;