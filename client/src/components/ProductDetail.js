import React , {useEffect , useState,useContext}  from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import {CredentialsContext} from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductDetail(props) {
   // const [cart,setCart] = useState([]);
    const history = useHistory();
    const [credentials] = useContext(CredentialsContext);
const {id} = useParams();
const [productDetail , setProductDetail] = useState([]);
const [buttonText , setButtonText] = useState("Add to cart")


const notify =() => toast.success("Successfully Added to Cart", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

   

useEffect(() => {
    axios.get(`http://localhost:5000/product-details/${id}`)
    .then(res => {
    setProductDetail(res.data)
    })
    .catch(err => console.log(err))
},[])
//console.log(cart);

    return (
        <div className="product">
            <div className="product-img">
                <img width ="300px" src={productDetail.image} alt= {productDetail.title} />
            </div>
            <div className="product-details">
 <p style={{fontSize:"40px" , fontWeight: "500", textAlign:"center"}}>{productDetail.title}</p>
 <p style ={{textAlign:"center", textTransform: "capitalize", fontWeight: "450"}}>Category  -  {productDetail.category}</p>
<h4>Description:</h4>
 <p style={{ fontSize:"20px"}}>{productDetail.description}</p>
 
 <div style={{display:"flex"}}>
 <div>
 <h4 >Price</h4>
 <p> ${productDetail.price}</p>
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

 {credentials ? <button className="product-btn" name="productButton" onClick={ () => {
     
     const cartProduct = {
         id: productDetail._id,
         emailId: credentials.email,
         title: productDetail.title,
         category:productDetail.category,
         image: productDetail.image,
         description: productDetail.description,
         price:productDetail.price
     }
     
     
     //console.log(cartProduct)
    
     axios.post("http://localhost:5000/user/cart",cartProduct)
     .then(res => {
     notify()
     setButtonText("Added to Cart")
     })
     .catch(err => console.log(err))
 }}>{buttonText}</button> : <button className="product-btn-disable" disabled>Login for + Cart</button>}

</div>
 
 
            </div>
        </div>
    )
}

export default ProductDetail
