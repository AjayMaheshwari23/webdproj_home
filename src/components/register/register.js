import React , { useState } from 'react'
import axios from 'axios';
import "./register.css";

export default function Register() {

    const [user , setUser] = useState({
        name:"",
        email:"",
        password:"",
        cnfpassword:""
    })

    const registerf = () => {
        axios.post("https://localhost:9002/register" , user)
        .then(res=>console.log(res))
    }

    const handlechange = e => {
        const {name , value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

  return (
    
    <div className='register'>
    {console.log(user)}
    <h1>Register Page</h1>
    Name : <input onChange={handlechange} value={user.name} name="name" type="text" placeholder='name'/> <br />
    E-Mail : <input onChange={handlechange} value={user.email} name="email" type="text" placeholder='email'/> <br />
    Password : <input onChange={handlechange} value={user.password} name="password" type="password" placeholder='password'/> <br />
    cnfPassword : <input onChange={handlechange} value={user.cnfpassword} name="cnfpassword" type="password" placeholder='cnfpassword'/> <br />
    <button onClick={registerf} className="btn"> Register </button>
  </div>
  )
}
