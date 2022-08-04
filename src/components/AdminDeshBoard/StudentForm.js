import React, { useEffect } from "react";

import { Box, TextField, Button, Stack, Alert, Dialog, IconButton } from "@mui/material";
import terms from "../../constants/terms"
import useGet from "../../api/hooks/useGet";
import useHttp from "../../api/hooks/useHttp";
import { uploadFile } from "../../api/http";
import usePost from "../../api/hooks/usePost";
import CloseIcon from '@mui/icons-material/Close';
function StudentForm({ open, setOpen, initInputs, isNew }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState(null);

    const getProfile = usePost("users/update-user");
    const updateProfile = useHttp('users/', 'PUT')



    const updateSubmit = async (e) => {

        e.preventDefault();
        try {
            if (image) {
                const formData = new FormData();
                formData.append('File', image);
                let res = await uploadFile("courses/uploaded_file", "POST", formData);
                console.log(res.imagePath);
                updateProfile.getData({ name, email, username, phone, description, image: res.imagePath });
            } else {
                updateProfile.getData({ name, email, username, phone, description });
            }
        } catch (error) {
            return;
        }

    }

    useEffect(() => {

        if (getProfile.data && !getProfile.error) {
            setName(getProfile.data.name)
            setEmail(getProfile.data.email)
            setUsername(getProfile.data.username)
            { getProfile.data.phone && setPhone(getProfile.data.phone) }
            { getProfile.data.description && setDescription(getProfile.data.description) }
        }
    }, [getProfile.data]);

    return (
        <Dialog open={open} fullWidth maxWidth='lg'>
            <IconButton onClick={() => { setOpen(false) }} sx={{ position: "absolute", right: 10, top: 10 }}>
                <CloseIcon />
            </IconButton>
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
                        <TextField value={phone || ""} focused={!getProfile.error} onChange={(e) => setPhone(e.target.value)} label="טלפון" variant="outlined" />
                        <TextField value={description || ""} focused={!getProfile.error} onChange={(e) => setDescription(e.target.value)} label="תאור" variant="outlined" />

                        <Button variant='contained' type='upload' component="label" >העלאת תמונה
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                name="uploaded_file"
                                type="file"
                                hidden
                            /></Button>
                        <Button type='submit' variant="contained">שמירה</Button>
                    </Stack>
                </form>
            </Box>
        </Dialog>
    );
}

export default StudentForm;