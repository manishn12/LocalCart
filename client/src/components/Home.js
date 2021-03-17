import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CredentialsContext } from '../App';
import { Link ,useHistory} from 'react-router-dom';
import './Card.css'
import ProductDetail from './ProductDetail'
 import '../bootstrap.min.css';
 import './Home.css';



function Home() {
  const history = useHistory();
  const [credentials] = useContext(CredentialsContext);
  const [products, setProducts] = useState([]);
 
 
  // console.log(credentials);
  //   console.log(credentials);
  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, []);


//console.log(cart);
  return (<div>

    
    {/* { products.map((product) =>(
          <Card onClick={handleClick}  key = {product._id} imageURL ={product.image}
         title={product.title} price = {product.price} />
      ) )} */}
      <div >
    {products.map((product)=> (
      <div class="card "  onClick={() => {
        
         history.push(`/product/` + product._id)
        }}
      >

<img style={{ width: "250px" }} class="card-img-top" src={product.image} alt={product.title} />
<p className="title">{product.title}</p>
<div className="price-btn">
  <p className="price">$ {product.price}</p>
  {credentials ? <button className="cart-btn " onClick={console.log("cart")}>Add to Cart</button> : <button className="cart-btn-disable" disabled>Login for + Cart</button>}

</div>
</div>
    ))}
    </div>
  </div>
  )
}

export default Home
