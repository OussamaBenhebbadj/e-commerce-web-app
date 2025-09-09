import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password
        })
      })

      const data = await res.json()
      console.log("✅ Signup response:", data)

      if (data.status === "success") {
        alert("Account created successfully!!")
        navigate("/login") // redirection vers login
      } else {
        alert("Signup failed: " + (data.message || "Unknown error"))
      }
    } catch (err) {
      console.error("❌ Signup error:", err)
      alert("Something went wrong")
    }
  }

  return (
    <div className='w-[350px] h-[350px] mx-96 my-48 '>
      <div>
        <div className='bg-yellow-100 h-[500px] rounded-2xl w-[700px] mx-[60%] mt-[10%]'>
          <h1 className='text-5xl text-green-500 font-black text-center py-4'>Welcome</h1>
          <p className='text-center text-sm'>
            Already have an Account?{" "}
            <Link to='/login'>
              <span className='text-md cursor-pointer font-black'>Login</span>
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input 
              className='mt-8 mx-32 px-4 h-8 w-[450px] rounded-xl border-0' 
              type="text" 
              placeholder='First Name' 
              value={firstname} 
              onChange={(e) => setFirstname(e.target.value)} 
            />
            <br /><br />
            <input 
              className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' 
              type="text" 
              placeholder='Last Name' 
              value={lastname} 
              onChange={(e) => setLastname(e.target.value)} 
            />
            <br /><br />
            <input 
              className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' 
              type="email" 
              placeholder='Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <br /><br />
            <input 
              className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' 
              type="password" 
              placeholder='Your Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <br /><br />
            <button 
              type="submit"
              className='bg-green-500 text-white py-2 px-32 rounded-xl my-4 ml-48 hover:scale-95 shadow-2xl'
            >
              Sign Up
            </button>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default Register
