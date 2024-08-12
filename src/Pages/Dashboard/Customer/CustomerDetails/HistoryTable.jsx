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
    border: 0
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    border: 0,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedHistoryTables({rows}) {
      
  return (
    <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CUSTOMER ID</StyledTableCell>
            <StyledTableCell align="left">DATE ISSUED</StyledTableCell>
            <StyledTableCell align="left">AMOUNT</StyledTableCell>
            <StyledTableCell align="left">REASON</StyledTableCell>
            <StyledTableCell align="left">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        {rows?.length === 0 ? <h2 style={{
        marginTop:'23px',
        width:'100%', 
        fontSize:'13px'}}>No Record Found</h2> : <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row?.calories}</StyledTableCell>
              <StyledTableCell align="left">{row?.fat}</StyledTableCell>
              <StyledTableCell align="left">{row?.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        }
      </Table>

      
    </TableContainer>
  );
}
