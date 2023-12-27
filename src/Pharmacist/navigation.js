import react ,{useState,useEffect}from "react"
import './navigation.css'
import { Link } from "react-router-dom"
export const  Navigation = ()=>{
return <div className="navcontainer">
    <h1>PHARMACIST</h1>
    <Link to="/">
       <p className="p2">home</p>
       </Link> 
       <Link to="/">
       <p className="p2">Logout</p>
       </Link> 
</div>
}