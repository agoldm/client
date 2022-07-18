import * as React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';

import http from "../api/http"

function DeleteForm({ open, setOpen, id ,getData}) {

    const [inputs, setInputs] = React.useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {
            let res = await http.delete("courses/" + id)
            // if(res.success){
            //     setOpen(false)
            //     return 
            // }
        } finally {
            getData();
            setOpen(false)
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"האם אתה בטוח שברצונך למחוק?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete} autoFocus>
                        כן
                    </Button>
                    <Button onClick={handleClose}>ביטול</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
export default DeleteForm;