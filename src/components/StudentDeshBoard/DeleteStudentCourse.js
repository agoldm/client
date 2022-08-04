import * as React from 'react';

import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import usePost from '../../api/hooks/usePost';

function DeleteStudentForm({ open, setOpen, id, getData }) {

    const [inputs, setInputs] = React.useState({});
    const deleteCourse = usePost("courses/delete-student-from-course");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {
            await deleteCourse.getData({ courseId: id });
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
export default DeleteStudentForm;