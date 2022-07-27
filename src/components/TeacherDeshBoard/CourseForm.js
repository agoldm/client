import React from "react";

import { Button, Dialog, DialogContent, DialogTitle, IconButton, Box, TextField, Grid, Stack, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import usePost from '../../api/hooks/usePost';
import { uploadFile } from '../../api/http'
import { formatDateJS } from "../../utils/helper"
import usePut from "../../api/hooks/usePut";
import useHttp from "../../api/hooks/useHttp";


function CourseForm({ open, setOpen, initInputs, isNew }) {

    const [method, setMethod] = React.useState("POST");
    const [inputs, setInputs] = React.useState({});
    const [image, setImage] = React.useState(null)

    const { getData, data, loading, error, setError, init } = useHttp("courses/", method);

    React.useEffect(() => {
        init();
        if (isNew) {
            setInputs({
                start_date: formatDateJS(),
                end_date: formatDateJS(),
                time: 1
            })
            setMethod("POST")
        } else {
            setInputs(initInputs)
            setMethod("PUT")
        }
    }, [isNew]);

    React.useEffect(() => {
        setTimeout(() => {
            if (data && data.success) setOpen(false)
        }, 3000);
    }, [data]);


    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (image) {
                const formData = new FormData();
                formData.append('File', image);
                let res = await uploadFile("courses/uploaded_file", "POST", formData);
                getData({ ...inputs, image: res.imagePath })
            } else {
                getData(inputs)
            }
        } catch (error) {
            return;
        }

    }



    React.useEffect(() => {
        init();
    }, []);
    return (
        <Dialog open={open} fullWidth maxWidth='lg'>
            <IconButton onClick={() => { setOpen(false) }} sx={{ position: "absolute", right: 10, top: 10 }}>
                <CloseIcon />
            </IconButton>
            <DialogTitle>
                הוספת קורס חדש
            </DialogTitle>
            <DialogContent>
                <Box component='form' sx={{ width: 0.7, m: "auto" }} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Stack direction="column" justifyContent="center" spacing={2}>
                                <TextField
                                    required
                                    variant='outlined'
                                    label='שם הקורס'
                                    name="name"
                                    value={inputs['name'] || ""}
                                    onChange={onChange}
                                />
                                <TextField
                                    required
                                    variant='outlined'
                                    label='קטגוריה'
                                    name="category"
                                    value={inputs['category'] || ""}
                                    onChange={onChange}
                                />
                                <TextField
                                    variant='outlined'
                                    label='תאור'
                                    name="description"
                                    value={inputs['description'] || ""}
                                    onChange={onChange} />
                                <TextField
                                    required
                                    variant='outlined'
                                    type="number"
                                    label='כמות תלמידים מקסימלית'
                                    name="max_student"
                                    value={inputs['max_student'] || ""}
                                    onChange={onChange}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction="column" justifyContent="center" spacing={2}>
                                <TextField
                                    required
                                    variant='outlined'
                                    label='משך זמן השיעור'
                                    name="long"
                                    value={inputs['long'] || ""}
                                    onChange={onChange}
                                />
                                <TextField
                                    variant='outlined'
                                    name="start_date"
                                    label="תאריך התחלה"
                                    InputLabelProps={{ shrink: true, required: true }}
                                    type="date"
                                    value={inputs['start_date'] || ""}
                                    onChange={onChange}
                                />
                                <TextField

                                    variant="outlined"
                                    name="end_date"
                                    label="תאריך סיום"
                                    InputLabelProps={{ shrink: true, required: true }}
                                    type="date"
                                    value={inputs['end_date'] || ""}
                                    onChange={onChange}
                                //defaultValue={values.someDate.format("YYYY-MM-DD")}
                                />
                                <TextField
                                    required
                                    type="number"
                                    variant='outlined'
                                    label='מחיר'
                                    name="price_per_time"
                                    value={inputs['price_per_time'] || ""}
                                    onChange={onChange}
                                />
                                {/* <TextField
                                    variant='outlined'
                                    type="file"
                                    label='תמונה'
                                    name="image"
                                    value={image}
                                    onChange={(e) => {
                                        setImage(e.target.files[0])
                                    }}
                                /> */}
                            </Stack>
                        </Grid>

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
                    </Grid>
                </Box>
                <Box>
                    {(data && data.success) && <Alert variant="filled" severity="success">
                        הקורס נוסף בהצלחה
                    </Alert>}
                </Box>
            </DialogContent>
        </Dialog>
    );
}
export default CourseForm;