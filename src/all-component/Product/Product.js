import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PerProduct from '../PerProduct/PerProduct';
 import './Product.css'
const Product = (props) => {
    const [products,setProducrs]=useState([])
    const [cart,setCart]=useState([])
    const [displayProducts,setDisplayProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{setProducrs(data)
                      setDisplayProducts(data)
        })
    },[])
   
    const btnHandel=(allProps)=>{
        const newCart=[...cart,allProps]
        setCart(newCart)
        console.log(allProps.name)
    }

  const searchHandeler=(event)=>{
      const searchText=event.target.value
      const matchText=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
      console.log(matchText.length)
      setDisplayProducts(matchText)
  }

    return (
      <div>
        <div className="search">
              <input onChange={searchHandeler} placeholder="Search Here Search Here Products" type="text" />
        </div>
         <div className="main">
            <div className="product-container">
                <h3 style={{paddingLeft:'16px',textDecoration:'underline',color:'black'}}>Products : {[products.length]}</h3>
                {
                   displayProducts.map(per=><PerProduct
                        key={per.key}
                        allProps={per}
                        btnHandel={btnHandel}
                        >  
                        </PerProduct>)
                }

            </div>
            <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Product;