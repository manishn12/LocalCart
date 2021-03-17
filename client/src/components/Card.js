import React, { useContext } from 'react'
// import '../bootstrap.min.css';
import './Card.css';
import { CredentialsContext } from '../App';



function Card(props) {
    const [credentials] = useContext(CredentialsContext);



    const handleClick = () => {
        //console.log(props.title);
    }

    return (

        <div class="card" onClick={handleClick}>

            <img style={{ width: "250px" }} class="card-img-top" src={props.imageURL} alt={props.title} />
            <p className="title">{props.title}</p>
            <div className="price-btn">
                <p className="price">$ {props.price}</p>
                {credentials ? <button className="cart-btn">+ Cart</button> : <button className="cart-btn-disable" disabled>Login for + Cart</button>}

            </div>
        </div>


    )
}

export default Card
