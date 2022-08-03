import * as React from 'react';

import { Box, IconButton, Grid, Typography, Button, TableContainer, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import DeleteForm from '../DeleteForm';

function MyStudents() {

    const { getData, data, loading, error } = useGet("courses/my-students");
    const [addBtnLable, setBtnLable] = React.useState("");

    const [currentID, setCurrentID] = React.useState(null);
    const [deleteFormOpen, setDeleteOpen] = React.useState(false);

    console.log(data);
    console.log(loading);

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
            <DeleteForm open={deleteFormOpen} setOpen={setDeleteOpen} id={currentID} getData={getData}></DeleteForm>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant='h3'>התלמידים שלי</Typography>

                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default MyStudents;