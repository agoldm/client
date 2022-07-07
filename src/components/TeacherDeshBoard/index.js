import * as React from 'react';

import { Box, IconButton, Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';

import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import { formatCurrency } from '../../utils/helper';
import CourseForm from './CourseForm';

const columns = [
    { key: "name", title: "שם הקורס" },
    { key: "category", title: "קטגוריה" },
    { key: "description", title: "תיאור" },
    { key: "long", title: "משך זמן" },
    { title: "מחיר", cb: (row) => formatCurrency(row.price_per_time) },
    { key: "start_date", title: "התחלה" },
    { key: "end_date", title: "סיום" },
    {
        title: "", cb: (row) => {
            return (
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            )
        }
    },
]

function TeacherDeshBoard() {

    const { data, loading, error } = useGet("courses/my-courses");
    const [addBtnLable, setBtnLable] = React.useState("");
    const [courseFormOpen, setCourseOpen] = React.useState(false);

    console.log(data);
    console.log(loading);

    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }

    return (
        <Box>
            <CourseForm open={courseFormOpen} setOpen={setCourseOpen} />
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant='h3'>הקורסים שלי</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant='contained'
                        startIcon={<AddBoxIcon />}
                        onMouseEnter={() => setBtnLable("הוספת קורס")}
                        onMouseLeave={() => setBtnLable("")}
                        onClick={() => { setCourseOpen(true) }}
                    >
                        {addBtnLable}
                    </Button>
                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default TeacherDeshBoard;