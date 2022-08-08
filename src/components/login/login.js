import axios from 'axios';
import React ,{useState} from 'react'
import "./login.css"

export default function Login() {

    const [user , setUser] = useState({
        email:"",
        password:""
    })

    const handlechange = (e) =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const loginf = () => { 
        console.log("Clicked");
        axios.post("https://localhost:9002/login" , user)
        .then(res=>alert(res.d))
    };

  return (

    <div className='login'>
      <h1>Login Page</h1>
      E-Mail : <input type="text" placeholder='email' onChange={handlechange} /> <br />
      Password : <input type="password" placeholder='password' onChange={handlechange} /> <br />
      <button onClick={loginf} className="btn"> Login </button>
    </div>
  )
}
