import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(248, 249, 253, 1)',
    color: 'black',
    border: 0,
    fontWeight: 800,
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: 'rgba(96, 96, 96, 1)',
    border: 0
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:nth-of-type(odd)': {
    border: 0,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables({rows}) {

  const navigate = useNavigate()
  const handleOp = (index) => {
    navigate(`detail/${index}`)

  }
  return (
    <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="left"
            >EMAIL</StyledTableCell>
            {/* <StyledTableCell align="left">PHONE NO</StyledTableCell> */}
            <StyledTableCell align="left">DATE REGISTERED</StyledTableCell>
          </TableRow>
        </TableHead>
        {rows?.length === 0 ? <h1 style={{marginTop:'23px',
        fontSize:'13px'}}>No Record Found</h1> :   
        <TableBody>
          
        {rows?.map((row, index) => (
          <StyledTableRow key={index}
          onClick={() => handleOp(row.id)}
          >
            <StyledTableCell component="th" scope="row">
            {row.firstname}
            </StyledTableCell>
            <StyledTableCell align="left" 

            >{row.email}</StyledTableCell>
            {/* <StyledTableCell align="left">{row.fat}</StyledTableCell> */}
            <StyledTableCell align="left">{row.createdAt}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
        
        }
      
      </Table>
    </TableContainer>
  );
}
