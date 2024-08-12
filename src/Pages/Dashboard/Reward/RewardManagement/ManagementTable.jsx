import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(248, 249, 253, 1)',
    color: 'black',
    border:0,
    fontWeight:800,
   fontSize:12,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor:'transparent',
    fontSize: 14,
    color: 'rgba(96, 96, 96, 1)',
    borderBottom: '0.1px solid rgba(178, 178, 178, 1)',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    borderBottom: '0.1px solid rgba(178, 178, 178, 1)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: '0.1px solid rgba(178, 178, 178, 1)',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  createData('Christine Brooks', 'christinebrooks@gmail.com', '09041901022', '04 Sep 2019'),
  
];

export default function MangementCustomizedTables() {
      
  return (
    <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="left">EMAIL</StyledTableCell>
            <StyledTableCell align="left">PHONE NO</StyledTableCell>
            <StyledTableCell align="left">DATE REGISTERED</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      
    </TableContainer>
  );
}
