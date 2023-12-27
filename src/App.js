import './Home.css';
//import { Login } from './login/login.js';
import { DoctorLogin } from './doctor/Doctorogin/DoctorLogin.js';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <>
    <h1> WELCOME</h1>
    <div className="container">
      {/* doctor */}
      <div className="doctor">
        <div className="img"></div>     
        <p>doctor</p>
        <div className="button">
        <Link to="/Doctorlogin">
                <button id="login-btn" className="singin">
                  Login
                </button>
              </Link>
        </div>
      
      </div>
      {/* patient */}
      <div className="patient">
      <div className="img"></div>
        <p>patient</p>
        <div className="button">
          {/* <button  className="singin">Login</button> */}
          <Link to="/UserLogin">
                <button id="login-btn" className="singin">
                  Login
                </button>
              </Link>
        </div>
      </div>
      {/* office-executive*/}
      <div className="office-executive">
      <div className="img"></div>
        <p>office-executive</p>
        <div className="button">
        {/* <button  className="singin" >Login</button> */}
        <Link to="/FofficeLogin">
                <button id="login-btn" className="singin">
                  Login
                </button>
              </Link>
        </div>
      </div>
      {/* pharmacist */}
      <div className="pharmacist">
      <div className="img"></div>
        <p>pharmacist</p>
        <div className="button">    
        <Link to="/PharmacistLogin">
                <button id="login-btn" className="singin">
                  Login
                </button>
              </Link>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;