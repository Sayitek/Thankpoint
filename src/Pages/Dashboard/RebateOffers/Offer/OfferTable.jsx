import React, {useState} from 'react';
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
  cursor: 'pointer',
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
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
  createData('Christine Brooks', 'christinebrooks@gmail.com',  '04 Sep 2019', 'Approved'),
 
  
];

export default function OfferCustomizedTables({rows}) {
    
  const navigate = useNavigate()
  const handleOp = (index) => {
    navigate(`../detail/${index}`)

  }
  console.log(rows, 'rows');
  return (
    <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>MERCHANT</StyledTableCell>
            <StyledTableCell align="left">TITLE</StyledTableCell>
            <StyledTableCell align="left">DATE</StyledTableCell>
            <StyledTableCell align="left">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row,index) => (
            <StyledTableRow  key={index}
            onClick={() => handleOp(row?.id)}
            >
              <StyledTableCell component="th" scope="row">
                {row.merchant}
              </StyledTableCell>
              <StyledTableCell align="left">{row?.title}</StyledTableCell>
              <StyledTableCell align="left">{row?.validTo}</StyledTableCell>
              <StyledTableCell align="left">{row?.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      
    </TableContainer>
  );
}
