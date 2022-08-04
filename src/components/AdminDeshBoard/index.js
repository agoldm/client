import * as React from 'react';

import { Box, IconButton, Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import { formatCurrency, formatDateIL } from '../../utils/helper';
import CourseForm from '../TeacherDeshBoard/CourseForm';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForm from '../DeleteForm';

function AdminDeshBoard() {

    const { getData, data, loading, error } = useGet("courses");

    const [currentID, setCurrentID] = React.useState(null);

    const [courseFormOpen, setCourseOpen] = React.useState(false);
    const [courseFormObject, setCourseFormObject] = React.useState({});
    const [courseFormIsNew, setCourseFormIsNew] = React.useState(false);

    const [deleteFormOpen, setDeleteOpen] = React.useState(false);

    React.useEffect(() => {
        if (!courseFormOpen) getData();
    }, [courseFormOpen])

    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    const columns = [
        { key: "name", title: "שם השיעור" },
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
                        <IconButton onClick={() => {
                            setCourseFormIsNew(false)
                            setCourseFormObject(row)
                            setCourseOpen(true)
                        }} >
                            <ModeEditOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => {
                            setCurrentID(row._id)
                            setDeleteOpen(true);
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            }
        },
    ]

    return (
        <Box>
            <CourseForm open={courseFormOpen} setOpen={setCourseOpen} isNew={courseFormIsNew} initInputs={courseFormObject} />
            <DeleteForm open={deleteFormOpen} setOpen={setDeleteOpen} id={currentID} getData={getData}></DeleteForm>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant='h3'>ניהול שיעורים</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant='contained'
                        size='large'
                        startIcon={<AddBoxIcon />}
                        onClick={() => {
                            setCourseFormIsNew(true)
                            setCourseOpen(true)
                        }}
                    >
                        הוספת שיעור
                    </Button>
                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default AdminDeshBoard;