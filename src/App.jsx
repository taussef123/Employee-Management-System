
import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
//import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'

function App() {

  const[user,setUser]=useState(null)

  const handleLogin = (email,password)=>{ // this is used to match the email and password

      if (email == "admin@me.com" && password == "123") {
       // console.log("This is Admin");
       setUser("admin")
       console.log(user);
       
      } else if(email =="user@me.com" && password=='123'){
       // console.log("This is User");
       setUser("employee")
       console.log(user);
       
        

      }
       else {
        alert("Check the credentials");
      }
  };
   
   
  //handleLogin("user@me.com",123); // we shall pass this function in login Component <Login/> here.
  
  // useEffect(()=>{
  //  //setLocalStorage() // here setLocal storage is called to set the data in local storage
  //  getLocalStorage()
  // })

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* it means if there is no user show loginpage */}

      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App
