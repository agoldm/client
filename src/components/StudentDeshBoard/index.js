import * as React from 'react';

import { Box, IconButton, Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import DeleteForm from '../DeleteForm';

function StudentDeshBoard() {

    const { getData, data, loading, error } = useGet("users/teachers");
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
                    <Typography variant='h3'>המורים שלי</Typography>
                </Grid>
                <Grid item xs={2}>
                    {/* <Button
                        variant='contained'
                        startIcon={<AddBoxIcon />}
                        onMouseEnter={() => setBtnLable("הוספת קורס")}
                        onMouseLeave={() => setBtnLable("")}
                        onClick={() => { setCourseOpen(true) }}
                    >
                        {addBtnLable}
                    </Button> */}
                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default StudentDeshBoard;