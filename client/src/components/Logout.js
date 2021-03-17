import React ,{useContext} from 'react'
import Navbar from './Navbar';
import {useHistory} from 'react-router-dom';
import {CredentialsContext} from '../App';
import '../bootstrap.min.css';

function Logout() {
    const history = useHistory();
    var [credentials] = useContext(CredentialsContext);
  
const handleClick = () => {
history.push("/login");
    }

    const cancelBtn = () => {
        history.push("/");
    }
    return (
        <>
       
      
            
            <h2 style={{textAlign:"center"}}>Are you sure, you want to Logout?</h2>
            <div style={{textAlign:"center"}}>
            <button onClick={handleClick} className="btn btn-danger" style={{textAlign:"center",margin:"2rem"}}>Yes</button>
            <button onClick={cancelBtn} className="btn btn-info">Cancel</button>
            </div>
     
        </>
        
      
    )
}

export default Logout
