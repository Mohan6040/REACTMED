import './navigation.css'
import { Link } from "react-router-dom"
export const  Navigation = ()=>{
return <div className="navcontainer">
    <h1>USER</h1>
    <div className="navigation">
       <Link to="/UserBook"><p className="p1">APPOINTMENT</p></Link> 
       <Link to="/Userchat">
        <p className="p1">CHAT</p> 
       </Link> 
       <Link to="/UserMedicene">
        <p className="p1">MEDICINE</p> 
       </Link> 
       <Link to="/">
       <p className="p1">Logout</p>
       </Link> 
        
        {/* <input type="text" placeholder="search" className="search"/> */}
    </div>
</div>
}