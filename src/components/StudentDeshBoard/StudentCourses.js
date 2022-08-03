import * as React from 'react';

import { Box, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import { formatCurrency, formatDateIL } from '../../utils/helper';
import DeleteForm from '../DeleteForm';
let loadingGif = require("../../loading.gif");
let errorgGif = require("../../error.gif");
function StudentsCourses() {

    const { getData, data, loading, error } = useGet("courses/student-courses");

    const [currentID, setCurrentID] = React.useState(null);
    const [deleteFormOpen, setDeleteOpen] = React.useState(false);
    if (loading) {
        return (
            <Grid item xs={7}>
                <img style={{ alignSelf: 'center' }} src={loadingGif} alt="wait until the page loads" />
            </Grid>
        );
    }
    if (error) {
        return (
            <Grid item xs={7}>
                <img style={{ alignSelf: 'center' }} src={errorgGif} alt="wait until the page loads" />
            </Grid>
        )
    }
    const columns = [
        { key: "name", title: "שם שיעור" },
        { key: "category", title: "קטגוריה" },
        { key: "description", title: "תיאור" },
        { key: "long", title: "משך זמן" },
        { title: "מחיר", cb: (row) => formatCurrency(row.price_per_time) },
        { title: "התחלה", cb: (row) => formatDateIL(row.start_date) },
        { title: "סיום", cb: (row) => formatDateIL(row.end_date) },
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
                    <Typography variant='h3'>השיעורים שלי</Typography>
                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default StudentsCourses;