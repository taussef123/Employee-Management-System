import React from "react"
import { useState } from "react"
const Login = ()=>{

    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("email is",email);
        console.log("password is",password);
        setEmail("")
        setPassword("")
        
    }
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-2xl ">
          <form 
          onSubmit={submitHandler}
          className="flex items-center flex-col">
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
              className="border-2 border-emerald-600 py-3 px-5 rounded-full bg-black outline-none bg-transparent text-xl text-white placeholder:text-gray-400 "
              type="email"
              placeholder="Enter your Email"
            />
            <input
            onChange={(e)=>{
                setPassword(e.target.value)

            }}
               required
               value={password}
              className="border-2 border-emerald-600 py-3 px-5 rounded-full bg-black outline-none bg-transparent text-xl text-white placeholder:text-gray-400 mt-3 "
              type="password"
              placeholder="Enter password"
            />
            <button className="border-none bg-emerald-600 py-3 px-5 rounded-full mt-5 bg-black outline-none bg-transparent text-xl text-white  ">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login;