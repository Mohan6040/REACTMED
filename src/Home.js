import React from "react";
import App from "./App";
import { Route,Routes } from "react-router-dom";
import { DoctorLogin } from "./doctor/Doctorogin/DoctorLogin";
import { DoctorRegister } from "./doctor/DoctorRegister/DoctorRegister";
import { DoctorAppointment } from "./doctor/Appoinment/Appointment";
import { DocterMedicene } from "./doctor/Medicene/Medicene";
import { DoctorChat } from "./doctor/DocterChat/DocterChat";
import { DoctorForgotPassword } from "./doctor/ForPass/ForPass";
import { FofficeLogin } from "./Front_office/FofficeLogin/FofficeLogin";
import { FofficeRegister } from "./Front_office/FofficeRegister/FofficeRegister";
import { FofficeForgotPassword } from "./Front_office/ForPass/ForPass";
import { Apporve } from "./Front_office/apporve/apporve";
import { Book } from "./Front_office/Book/book";
import { ViewAll } from "./Front_office/viewAll/viewAll";
import { Medicene } from "./Pharmacist/Medicene/Medicene";
import { PharmacistForgotPassword } from "./Pharmacist/ForPass/ForPass";
import { PharmacistRegister } from "./Pharmacist/FofficeRegister/FofficeRegister";
import { PharmacistLogin } from "./Pharmacist/PharmacistLogin/FofficeLogin";
import { UserLogin } from "./User/Doctorogin/DoctorLogin";
import { UserRegister } from "./User/DoctorRegister/DoctorRegister";
import { UserForgotPassword } from "./User/ForPass/ForPass";
import { UserBook } from "./User/Appointment/book";
import { Userchat } from "./User/chat/chat";
import { UserMedicene } from "./User/Medicene/Medicene";

export const Home =()=>{
return(<Routes>

<Route path="/"element={<App/>}/>

<Route path="/Doctorlogin"element={<DoctorLogin/>}/>
<Route path="/DoctorRegister"element={<DoctorRegister/>}/>
<Route path="/DoctorAppointment"element={<DoctorAppointment/>}/>
<Route path="/DocterMedicene"element={<DocterMedicene/>}/>
<Route path="/DoctorChat"element={<DoctorChat/>}/>
<Route path="/DoctorForgotPassword"element={<DoctorForgotPassword/>}/>

<Route path="/FofficeLogin"element={<FofficeLogin/>}/>
<Route path="/FofficeRegister"element={<FofficeRegister/>}/>
<Route path="/FofficeForgotPassword"element={<FofficeForgotPassword/>}/>
<Route path="/Apporve"element={<Apporve/>}/>
<Route path="/Book"element={<Book/>}/>
<Route path="/ViewAll"element={<ViewAll/>}/>

<Route path="/PharmacistForgotPassword"element={<PharmacistForgotPassword/>}/>
<Route path="/PharmacistRegister"element={<PharmacistRegister/>}/>
<Route path="/PharmacistLogin"element={<PharmacistLogin/>}/>
<Route path="/Medicene"element={<Medicene/>}/>

<Route path="/UserForgotPassword"element={<UserForgotPassword/>}/>
<Route path="/UserRegister"element={<UserRegister/>}/>
<Route path="/UserLogin"element={<UserLogin/>}/>
<Route path="/UserBook"element={<UserBook/>}/>
<Route path="/Userchat"element={<Userchat/>}/>
<Route path="/UserMedicene"element={<UserMedicene/>}/>



</Routes>)
}