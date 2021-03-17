import React ,{useContext , useEffect , useState} from 'react';
import {CredentialsContext, AdminContext} from '../App';
import './Account.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Account() {
    const [credentials] = useContext(CredentialsContext);
    const [emails ,SetEmails] = useState([]);
    //const [adminStatus , setAdminStatus] = useState(false); 
    const [admin,setAdmin] = useContext(AdminContext);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const AddAdminToast =() => toast.warn("Create Admin Successfully!!!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    useEffect(() => {
       axios.get("http://localhost:5000/user/register")
        .then(res => {
            //  console.log(res)
    SetEmails(res.data)
    //console.log(emails)
    })
       .catch(err => console.log(err)) 
    },[])

const handleSubmit = (e) => {
    e.preventDefault();
    AddAdminToast();
    let data = {
        email,
        password
    }
    //console.log(data)
    axios.post("http://localhost:5000/user/add-admin" ,data)
    .then(res => {console.log(res)
    
    })
    .catch(err => console.log(err))
}

    return (

        <>
        <div className="header">
        
        {credentials.username!== undefined ?  <h2>Hello, {credentials.username}</h2> :
        
       <h2 style={{color:"#000"}}>Hello, {credentials.firstName} {credentials.lastName}</h2>
        }
      {!admin &&  <h3 style={{color:"#000"}}>{credentials.email}</h3>}
        </div>
        <div className="row container">
        

<div className="col-lg-6" style={{textAlign:"center",padding:"30px"}}>
            {admin && <h3>Account Details:</h3> }
            <br />
        
{admin &&    emails.map((email) => (
<div >
    <p className={email.adminStatus ? "p-admin" : "p-normal"}>{email.firstName} , {email.email} </p>
   
</div>
))}
</div>

{admin && 
<form className="col-lg-6 " style={{textAlign:"center",padding:"30px"}} onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" value={email} name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <label for="exampleInputEmail1">Enter Password</label>
    <input type="password" class="form-control" value={password} name="password"  placeholder="Enter Admin Password" onChange={(e) => setPassword(e.target.value)} />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
}
<ToastContainer 
 position="bottom-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
</div>
     
</>
    )
}

export default Account
