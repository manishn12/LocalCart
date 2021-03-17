import React,{useState,useContext} from 'react'
 import '../bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {CredentialsContext,AdminContext} from '../App';


function Navbar() {

  const [credentials] = useContext(CredentialsContext);
  const [admin] = useContext(AdminContext);
 



    return (
        <nav className ="navbar navbar-expand navbar-light">
      <div className= "container" >
        <Link to="/" className = "navbar-brand" style={{color:"#fff"}}>LocalCart</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
     
        {credentials  && <li className="nav-item" >
               <Link to="/cart" className ="nav-link" style={{color:"#fff"}}>Cart</Link>
             </li>}
  
             {credentials ? <>
             {!admin && <li className="nav-item">
               <Link to="/request" className ="nav-link" style={{color:"#fff"}}>Request </Link>
             </li>}
             {admin && <li className="nav-item">
               <Link to="/post" className ="nav-link" style={{color:"#fff"}}>Upload</Link>
             </li> }
             <li className="nav-item">
               <Link to="/account" className ="nav-link" style={{color:"#fff"}}>Account</Link>
             </li>
             
             <li className="nav-item">
               <Link to="/logout" className ="nav-link" style={{color:"#fff"}}>Logout</Link>
             </li>
             </> 
              :
               <>
               <li className="nav-item">
               <Link to="/login" className ="nav-link" style={{color:"#fff"}}>Login</Link>
             </li>
             <li className="nav-item">
               <Link to="/register" className="nav-link" style={{color:"#fff"}}>Sign Up</Link>
             </li>
             </> }
             
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
