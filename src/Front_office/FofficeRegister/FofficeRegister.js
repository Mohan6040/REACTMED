import react ,{useState,useEffect}from "react"
import './FofficeRegister.css'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


export const FofficeRegister=()=>{
    // const [page,changepage]=useState("LOGIN")
    const [email,changeemail]=useState("")
    const [name,changename]=useState("")
    const [password,changepassword]=useState("")
    const [err,changeerr]=useState("")
    const [onRecaptchaChange,changeonRecaptchaChange]=useState(false)
    const navigate=useNavigate("")

    useEffect(()=>{
        console.log(email,"email");
        console.log(password,"password");
        console.log(name,"name");
    },[email,password,name])
    
    const checkMail=(d)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(d);
        return isValid
        }

    const save= async()=>{
        console.log("save");
        const data ={
            email:email,
            name:name,
            password:password,
            role:"officeExecutive"
        }
        if (onRecaptchaChange) {
            if (name) {
                if (checkMail(email)) {
                    if (password.length>=5) {
                
                      await   axios.post("http://localhost:1111/newofficial",data).then(response => {
                           console.log(response.data);
                           navigate("/FofficeLogin")
                            
                          })
                          .catch(error => {
                            
                            console.error('Error:', error);
                          });
                
                    } else {
                        // console.log("enter password atleast 5 character");
                        changeerr("enter password atleast 5 character") 
                    setTimeout(hideSpam, 1000);
                    }
                
                } else {
                    // console.log("enter email");
                    changeerr("enter proper email") 
                    setTimeout(hideSpam, 1000);
                }
            } else {
                // console.log("enter name");
                changeerr("enter name") 
      setTimeout(hideSpam, 1000);
                
            }
            
        } else {
            // console.log("verify captcha");
            changeerr("VERIFY CAPTCHA") 
      setTimeout(hideSpam, 1000);
        }
    }

    const hideSpam = () => {
        changeerr(null) 

      };


    return <>
        <div  className="lcontainer">

        <div className="login">
        <h1>REGISTER</h1>

        <p>Name</p>
            <input type="email"
            value={name}
            onChange={e=>changename(e.target.value)}
            placeholder="Enter name"></input>

            <p>Email</p>
            <input type="email"
            value={email}
            onChange={e=>changeemail(e.target.value)}
            placeholder="Enter value"></input>


            <p >Password</p>
            <input type="Password"
            value={password}
            onChange={e=>changepassword(e.target.value)}
            placeholder="Enter Password"></input>
            
            <ReCAPTCHA className="ReCAPTCHA" sitekey="6Lf7eyQpAAAAABP44pO0L6bvtrOV5FnLLk1kGIrR" onChange={()=>changeonRecaptchaChange(true)} />

            <div className="div1">
                {/* <Link to="/Doctorlogin"> */}
                <button className="save" onClick={save}>save the details</button>
                {/* </Link> */}
                
            </div>
        {err?<p className="error">{err}</p>:null}
        </div>
    
    </div>
    </>
   
}