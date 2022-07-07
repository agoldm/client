import * as React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, IconButton, Box, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function CourseForm({open, setOpen}) {

    const [inputs, setInputs] = React.useState({});

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <Dialog open={open} fullWidth maxWidth='lg'>
            <IconButton onClick={() => {setOpen(false)}} sx={{position:"absolute", right:10,top:10}}>
                <CloseIcon />
            </IconButton>
            <DialogTitle>
                הוספת קורס חדש
            </DialogTitle>
            <DialogContent>
                <Box component='form' sx={{p:4}} onSubmit={onSubmit}>
                    <TextField 
                        variant='outlined'
                        label='שם הקורס'
                        name="name"
                        value={inputs['name'] || ""}
                        onChange={onChange}
                        fullWidth
                    />
                    <TextField 
                        variant='outlined'
                        label='משהו אחר'
                        name="test"
                        value={inputs['test'] || ""}
                        onChange={onChange}
                        fullWidth
                    />
                    <Button variant='contained' type='submit'>שמירה</Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
export default CourseForm;