import react ,{useState,useEffect}from "react"
import './navigation.css'
import { Link,useNavigate } from "react-router-dom";

export const  Navigation = ()=>{
return <div className="navcontainer">
    <h1>Front office</h1>
    <div className="navigation">
        <Link to="/Apporve">
        <p className="p1">APPROVE</p>
        </Link>
        <Link to="/Book">
        <p className="p1">BOOK</p> 
        </Link>
        <Link to="/ViewAll">
        <p className="p1">VIEW ALL</p>
        </Link>
        <Link to="/">
       <p className="p1">Logout</p>
       </Link> 
    </div>
</div>
}