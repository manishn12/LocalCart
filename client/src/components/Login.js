import axios from 'axios';
import React, {useState, useContext} from 'react';
import './Login.css';
import {CredentialsContext , AdminContext} from '../App';
import {useHistory, Link} from 'react-router-dom';





function Login() {
    const history = useHistory();
    
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [,setCredentials] = useContext(CredentialsContext);
    const [admin,setAdmin] = useContext(AdminContext);
const [error ,setError] = useState(false);

  

const handleSubmit = (e) =>{
e.preventDefault();
const data = { 
    email,
    password
}

axios.post("http://localhost:5000/user/login" ,data).then(
    res =>{ 
        //console.log(res)
        let firstName = res.data.firstName
        setCredentials({firstName ,email,password})
        history.push("/")
        
        setAdmin(res.data.adminStatus)
    }
).catch(err =>{
    console.log(err.message)
setError(true)
}

)

// if(username == 'Admin' && email == 'test@admin.com' && password == 'test1234'){
//     const realAdmin = {
//         username: "Admin",
//         email:"test@admin.com",
//         password: "test1234"
//     }
// setAdmin(true);
// }
}
//console.log(admin);

    return (
        <div className="login-bg">
        {error && <h3 style ={{color:"red", textAlign:"center",fontSize:"25px",}}>Invalid Email or Password</h3>}
            <form className="form" onSubmit={handleSubmit}>
               <h2 className="form-header">Login</h2>
               
               
               <div className="form-group">

                   <label>Email</label>
                   <input type="email" className="form-control" placeholder="Email" value={email}
                   onChange={e => {setEmail(e.target.value)}
                   } />
               </div>
               <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" placeholder="Password" value={password}
                       onChange={e => setPassword(e.target.value)}
                   />
               </div>
               
               <button className="btn btn-primary btn-block" >Login</button>
           </form>
          
        </div>

    )
}

export default Login
