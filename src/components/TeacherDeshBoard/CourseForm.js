import * as React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, IconButton, Box, TextField, Grid, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import usePost from '../../api/hooks/usePost';
function CourseForm({ open, setOpen }) {

    const [inputs, setInputs] = React.useState({});
    const [image, setImage] = React.useState(null)

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs);
    }
    const { getData, data, loading, error, setError } = usePost("courses/uploaded_file");
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const input in inputs) {
            formData.append(input, inputs[input])
        }
        setImage(e.target.files[0])
        formData.append('File', setImage);
        getData(formData)
    }
    const values = {
        someDate: "2017-05-24"
    };
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
                                    name="time"
                                    value={inputs['time'] || ""}
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
                                        onChange={onChange}
                                        name="uploaded_file"
                                        type="file"
                                        hidden
                                    /></Button>
                            </Stack>
                        </Grid>
                    </Grid>

                </Box>
            </DialogContent>
        </Dialog>
    );
}
export default CourseForm;