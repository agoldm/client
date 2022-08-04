import * as React from 'react';

import { Box, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import DeleteForm from '../DeleteForm';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import StudentForm from './StudentForm';
function AllTeachers() {

    const { getData, data, loading, error } = useGet("users/teachers");

    const [currentID, setCurrentID] = React.useState(null);
    const [deleteFormOpen, setDeleteOpen] = React.useState(false);

    const [courseFormOpen, setCourseOpen] = React.useState(false);
    const [courseFormObject, setCourseFormObject] = React.useState({});
    const [courseFormIsNew, setCourseFormIsNew] = React.useState(false);
    
    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    const columns = [
        { key: "name", title: "שם" },
        { key: "email", title: "אימייל" },
        { key: "phone", title: "טלפון" },
        { key: "gender", title: "מגדר" },
        {
            title: "", cb: (row) => {
                return (
                    <div>
                        <IconButton onClick={() => {
                            setCourseFormIsNew(false)
                            setCourseFormObject(row)
                            setCourseOpen(true)
                        }} >
                            <ModeEditOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon onClick={() => {
                                setCurrentID(row._id)
                                setDeleteOpen(true);

                            }} />
                        </IconButton>
                    </div>
                )
            }
        },
    ]

    return (
        <Box>
            <StudentForm open={courseFormOpen} setOpen={setCourseOpen} isNew={courseFormIsNew} initInputs={courseFormObject} />
            <DeleteForm open={deleteFormOpen} setOpen={setDeleteOpen} id={currentID} getData={getData}></DeleteForm>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant='h3'>ניהול מורים</Typography>

                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default AllTeachers;