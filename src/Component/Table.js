import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../style/Table.css"

function createData( product, trackinId, date, Status, protein) {
  return { product, trackinId, date, Status, protein };
}

const rows = [
  createData('Lasania Chicken Fri', 18945658, "15 March 2023", "Approved", "Detail"),
  createData('Lasania Chicken Fri', 18945658, "15 March 2023", "Pending", "Detail"),
  createData('Lasania Chicken Fri', 18945658, "15 March 2023", "Approved", "Detail"),
  createData('Lasania Chicken Fri', 18945658, "15 March 2023", "Delivered", "Detail")
];

export default function BasicTable() {

    const myStatus=(rowStatus)=>{
        if(rowStatus==="Approved"){
           return {
            background:'rgb(145 254 159 / 47%)',
            color:"green",
           }           
        }
        else if(rowStatus==="Pending"){
            return{
                background:"#ffad8f",
                color:"red",
            }
        }
        else{
            return{
                background:"#59bfff",
                color:"white",
            }
        }


    }

  return (
    <TableContainer style={{background:"#fff"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tacking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="left">{row.trackinId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"><span className='status' style={myStatus(row.Status)}>{row.Status}</span></TableCell>
              <TableCell align="left" className='details'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}