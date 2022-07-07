import React from 'react'
import { useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

const MuiTable = ({ pColumns, pRows, tableProps }) => {

    const theme = useTheme();

    const [columns, setColumns] = useState(pColumns);
    const [rows, setRows] = useState(pRows);

    const [sort, setSort] = useState(false);
    const [orderBy, setOrderBy] = useState('');
    const [isDesc, setIsDesc] = useState('asc');

    const handleSort = (a, b) => {
        if (!sort) return;
        let x = a[orderBy];
        let y = b[orderBy];
        if (isDesc == 'asc') {
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        } else {
            if (x > y) { return -1; }
            if (x < y) { return 1; }
            return 0;
        }
    }

    useEffect(() => {
        setRows(pRows)
    }, [pRows])

    return (
        <TableContainer sx={{ maxHeight: 0.99 }}>
            <Table stickyHeader {...tableProps}>
                <TableHead>
                    <TableRow>
                        {columns.map((col, index) => (
                            <TableCell align="center" sx={{
                                color: theme.palette.third.main,
                                fontWeight: 'bold'
                            }} key={index}>
                                {col.title}
                                {col.sort && <TableSortLabel
                                    active={orderBy == col.key ? true : false}
                                    direction={orderBy == col.key ? isDesc : 'asc'}
                                    onClick={() => {
                                        setSort(true);
                                        setOrderBy(col.key);
                                        setIsDesc(orderBy == col.key ? `${isDesc == 'asc' ? 'desc' : 'asc'}` : isDesc);
                                    }} />}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.sort(handleSort)
                        .map((row) => (
                            <TableRow hover key={row.id}>
                                {columns.map((col, index) => (
                                    <TableCell align="center" sx={{
                                        fontSize: "75%",
                                        color: theme.palette.primary.sec,
                                    }} key={index}>
                                        {col.key
                                            ? row[col.key]
                                            : col.cb(row)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default MuiTable

