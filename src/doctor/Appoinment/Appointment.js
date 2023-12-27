import react ,{useState,useEffect}from "react"
import './Appointment.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Navigation } from "../navigation";

export const  DoctorAppointment = ()=>{
   
    const [datas,changedata]=useState([])
    const [Approved,changeApproved]=useState("Approved")
    const [Pending,changePending]=useState("Pending")
    useEffect(()=>{
    //  console.log("appoinment");
     axios.get("http://localhost:1111/appoinment").then(response => {
       console.log("im in");
                            changedata(response.data);
                            //  console.log(response.data);
                           })
                           .catch(error => {
                             console.error('Error:', error);
                           });
    },[])
return <>
<Navigation/>
  <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className="TableHead">
          <TableRow>
            <TableCell align="left">appointmentId</TableCell>
            <TableCell align="left">doctorName</TableCell>
            <TableCell align="left">patientName</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="left">status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
           row.status? <TableRow
           key={row.name}

           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           
           <TableCell align="left">{row.appointmentId}</TableCell>
           <TableCell align="left">{row.doctorName}</TableCell>
           <TableCell align="left">{row.patientName}</TableCell>
           <TableCell align="left">{row.description}</TableCell>
           <TableCell align="left">{row.status?Approved:Pending}</TableCell>
         </TableRow>:null
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  
   
}

