import axios from 'axios';
import React ,{useState , useContext} from 'react';
import './Register.css';
import {useHistory} from 'react-router-dom';
import {CredentialsContext} from '../App';


function Register() {
    const history = useHistory();
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [,setCredentials] = useContext(CredentialsContext);
    const [error,setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Works")
        const data ={
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        
axios.post("http://localhost:5000/user/register",data).then(
    res=>{
        console.log(res)
        setCredentials({firstName, lastName,email,password})
    history.push("/")
    }
)
.catch(
    err =>{ console.log(err)
    setError(true)
    }
);



    }
    return (
        <div>
      {  error && <h3 className="heading-error">An error has been occured. Try Again!!!</h3>}
           <form  onSubmit={handleSubmit}>
               <h2>Sign Up</h2>
               <div className="form-group">
                   <label>First Name</label>
                   <input type="text" className="form-control" name="firstName" value = {firstName} placeholder="First Name"
                   onChange={e => setFirstName(e.target.value)} required/>
               </div>
               <div className="form-group">
                   <label>Last Name</label>
                   <input type="text" className="form-control" name="lastName" placeholder="Last Name" value = {lastName}
                       onChange={e => setLastName(e.target.value)}
                   />
               </div>
               <div className="form-group">
                   <label>Email</label>
                   <input type="email" className="form-control" required name="email" placeholder="Email" value={email}
                   onChange={e => {setEmail(e.target.value)
                  }
                   } />
               </div>
               <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" required name="password" placeholder="Password" value={password}
                       onChange={e => setPassword(e.target.value)}
                   />
               </div>
               <div className="form-group">
                   <label>Confirm Password</label>
                   <input type="password" className="form-control" required name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
                       onChange={e => setConfirmPassword(e.target.value)}
                   />
               </div>
               <button className="btn btn-primary btn-block" >Sign Up</button>
           </form>
        </div>
    )
}

export default Register
