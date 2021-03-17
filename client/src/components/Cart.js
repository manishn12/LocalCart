import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { CredentialsContext } from '../App';
import '../bootstrap.min.css';
import './Cart.css';
import { RiDeleteBin6Line} from "react-icons/ri";
import {useHistory} from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart() {
    const history = useHistory();
    const [credentials] = useContext(CredentialsContext);
    const [carts, setCarts] = useState([]);

    const removeCartToast =() => toast.error("Product remove from Cart!!!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        const BuyToast = () => toast.dark("Thanks for Purchase", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    // console.log(credentials)

    let userCredential = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password
    }
    //console.log(userCredential)

    useEffect(() => {
        axios.post("http://localhost:5000/user/getCart", userCredential)
            .then(res => {
                //console.log(res.data)
                setCarts(res.data.cart)
            })
            .catch(err => console.log(err))
    }, [carts])

    // console.log(carts);
    // carts.forEach((cart) => {
    //     setTotalPrice(totalPrice + cart.price)
    // });
    
    return (
        <div className="container" >
        {carts.length == 0  ? <p style={{textAlign:"center" , color:"red", fontSize:"40px",margin:"20px"}}>Cart is empty</p > : <h1 style={{ textAlign: "center" }}> Your Cart</h1>}
            {carts.map((cart) => (
                
  
                < div className= "card mb-3" style={{width:"100%" ,height:"200px"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={cart.image} className="card-img"  alt={cart.title} />
    </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{display:"flex"}}>
                            <div>
                                <h5 className="card-title" style={{fontSize:"20px"}}>{cart.title}</h5>
                                
                                <p className="card-text">${cart.price}</p>
                                </div>
                                
                               <RiDeleteBin6Line className="delete-icon" onClick={()=>{
                                  removeCartToast()
                                 let credCart = {
                                     cart: cart ,
                                     email: credentials.email
                                 }
                                   axios.post("http://localhost:5000/user/delete-cart",credCart)
                                   .then(res => {
                                    //    console.log(res)
                                    
                                    setCarts(res.data.cart)
                                   })
                                   .catch(err => console.log(err))
                               }}/> 
                            </div>
                        </div>
                    </div>
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
            ))}
          <div style={{textAlign:"center"}}>
          { !carts.length == 0 && <button onClick={() => {
               
              axios.post("http://localhost:5000/user/buy-now",userCredential)
              .then(res => {
                
              setCarts(res.data.cart)
              BuyToast()})
              .catch(err => console.log(err))
          }} className="btn btn-warning">BUY NOW</button>}
          
          </div>
       
        </div>

    )
}

export default Cart
