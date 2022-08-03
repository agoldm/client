import * as React from 'react';

import { Box, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import { formatCurrency, formatDateIL } from '../../utils/helper';
function StudentsCourses() {

    const { getData, data, loading, error } = useGet("courses/student-courses");

    const [currentID, setCurrentID] = React.useState(null);
    console.log(data);
    console.log(loading);
    if (loading) {
        return (<p>loading..</p>)
    }
    if (error) {
        return (<p>error..</p>)
    }
    const columns = [
        { key: "name", title: "שם הקורס" },
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

                            }} />
                        </IconButton>
                    </div>
                )
            }
        },
    ]

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography variant='h3'>הקורסים שלי</Typography>
                </Grid>
            </Grid>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default StudentsCourses;