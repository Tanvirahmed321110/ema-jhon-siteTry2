import React from 'react';
import Rating from 'react-rating';
import './PerProduct.css'
const PerProduct = (props) => {
    console.log(props)
    const {name,img,price,seller,stock,star}=props.allProps
    
    return (
        <div className="per-main">
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="data">
            <h2>Name : {name.slice(0,100)}</h2>
            <h3>Price : ${price}</h3>
            <p>Seller  : {seller}</p>
            
            <div className="icon">
                 <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    
                 />
              </div>

            <p>Avaiable This Products :{stock}</p>
            <button onClick={()=>props.btnHandel(props.allProps)}> <i class="fas fa-credit-card"></i> &nbsp; Add To Cart</button>
        </div>
    </div>
    );
};

export default PerProduct;