import * as React from 'react';

import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import MuiTable from '../tables/MuiTable';
import useGet from '../../api/hooks/useGet';
import { formatCurrency } from '../../utils/helper';

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
            <h2>My Courses</h2>
            <MuiTable pColumns={columns} pRows={data} />
        </Box>
    )
}
export default TeacherDeshBoard;