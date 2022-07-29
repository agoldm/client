import React, { useEffect } from "react";

import { Box, TextField, Button, Stack, Typography, Grid, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import terms from "../constants/terms"
import usePost from '../api/hooks/usePost';
import { crypt } from "../utils/helper"
import useGet from "../api/hooks/useGet";

function Profile({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState(null)
    const [phone, setPhone] = React.useState("");

    const { getData, data, loading, error, setError } = useGet("users/profile");
    console.log(data);

    const registerSubmit = (e) => {

        e.preventDefault();

        getData({ name, email, username, phone, description });

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
                    <Typography variant="h5">עדכון פרטי משתמש</Typography>
                    {error && <Alert variant="filled" severity="error">
                        שם משתמש או סיסמא לא נכונים
                    </Alert>}
                    {(data && data.success) && <Alert variant="filled" severity="success">
                        נרשמת בהצלחה
                    </Alert>}
                    <TextField onChange={(e) => setName(e.target.value)} required label="שם מלא" variant="outlined" />
                    <TextField onChange={(e) => setEmail(e.target.value)} required label="אימייל" type='email' variant="outlined" />
                    <TextField onChange={(e) => setPhone(e.target.value)} required label="טלפון" type='phone' variant="outlined" />
                    <TextField onChange={(e) => setDescription(e.target.value)} label="תאור" type='description' variant="outlined" />
                    <TextField onChange={(e) => setUsername(e.target.value)} required label={terms("username")} variant="outlined" />

                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <Button variant='contained' type='submit'>שמירה</Button>
                            <Button variant='contained' type='upload' component="label" >העלאת תמונה
                                <input
                                    onChange={(e) => setImage(e.target.files[0])}
                                    name="uploaded_file"
                                    type="file"
                                    hidden
                                /></Button>
                        </Stack>
                    </Grid>
                </Stack>
            </form>
        </Box>

    );
}

export default Profile;