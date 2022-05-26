import React from 'react';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

function createData(name, age, sex, country, salary) {
    return { name, age, sex, country, salary };
}
// add data
const rows = [
    createData('John', 45, 'Male', 'Canada', 5000),
    createData('Mary', 25, 'Female', 'London', 8500),
    createData('Nick', 31, 'Male', 'America', 7800),
    createData('Sunil', 65, 'Male', 'London', 4800),
    createData('Rebecca', 51, 'Female', 'America', 7500),
];

function MyStudents() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" style={{"minWidth":660}}>  
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Salary&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
               {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyStudents;