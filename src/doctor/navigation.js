import './navigation.css'
import { Link } from "react-router-dom"
export const  Navigation = ()=>{
return <div className="navcontainer">
    <h1>DOCTOR</h1>
    <div className="navigation">
       <Link to="/DoctorAppointment"><p className="p1">APPOINTMENT</p></Link> 
       <Link to="/DoctorChat">
        <p className="p1">CHAT</p> 
       </Link> 
       <Link to="/DocterMedicene">
       <p className="p1">MEDICENE</p>
       </Link> 
       <Link to="/">
       <p className="p1">Logout</p>
       </Link> 
        
        {/* <input type="text" placeholder="search" className="search"/> */}
    </div>
</div>
}