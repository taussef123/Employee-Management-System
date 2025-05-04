import React from "react"
import { useState } from "react"
const Login = ({handleLogin})=>{

    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password) // here we r passing func handleLogin from child to parent .when we submit the button handle login is called  and the function which is in the Login Component handlelogin call and check the email and password
        
      //  console.log("email is",email);
      // console.log("password is",password);
        setEmail("")
        setPassword("")
        
    }
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-2xl ">
          <form onSubmit={submitHandler} className="flex items-center flex-col">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border-2 border-emerald-600 py-3 px-5 rounded-full bg-black outline-none bg-transparent text-xl text-white placeholder:text-gray-400 "
              type="email"
              placeholder="Enter your Email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              value={password}
              className="border-2 border-emerald-600 py-3 px-5 rounded-full bg-black outline-none bg-transparent text-xl text-white placeholder:text-gray-400 mt-3 "
              type="password"
              placeholder="Enter password"
            />
            <button
              style={{ backgroundColor: "#059669" }}
              className="border-none   py-3 px-24 rounded-full mt-5 outline-none bg-transparent text-xl text-white    bg-black"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login;