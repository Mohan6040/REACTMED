import {useState,useEffect}from "react"
import './Medicene.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Navigation } from "../navigation";

export const  DocterMedicene = ()=>{
   
    const [data,changedata]=useState([])
    // const [searchQuery,changesearchQuery]=useState("")
  const [search,setsearch]=useState("")

   useEffect(()=>{
    console.log("medic");
    // console.log(searchQuery,"searchQuery");
    axios.get("http://localhost:1111/Medicine").then(response => {
      console.log("im in");
                           changedata(response.data);
                            
                          })
                          .catch(error => {
                            console.error('Error:', error);
                          });
   },[search])

return <>
   <Navigation/>
   <div className="d1">
   <input
   type="text"
   placeholder="Search..."
   value={search}
   onChange={(e)=>setsearch(e.target.value)} 
   />
   </div>
  <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className="TableHead">
          <TableRow>
            <TableCell align="left">medicineName</TableCell>
            <TableCell align="left">dosage</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">gst</TableCell>
            <TableCell align="left">discount</TableCell>
            <TableCell align="left">Finalprice</TableCell>
            {/* <TableCell align="left"></TableCell> */}
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((row)=>{return search.toLowerCase()===""?
           row:
          row.medicineName.toLowerCase().includes(search  )
        }).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
        
              
              <TableCell align="left">{row.medicineName}</TableCell>
              <TableCell align="left">{row.dosage}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.gst}</TableCell>
              <TableCell align="left">{row.discount}</TableCell>
              <TableCell align="left">{row.price+row.gst-row.discount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  
   
}

