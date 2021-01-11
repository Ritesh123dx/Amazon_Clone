import React from 'react';
import "./Checkout.css";
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (

    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-9">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <Subtotal />
        </div>

      </div>

      <h3>Hello, {user?.email}</h3>
      <h2 className="checkout__title">Your shopping Basket</h2>
      <FlipMove>
        {basket.map(item => (

          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />


        ))}
      </FlipMove>
      
    </div>



    //     <div className="checkout">
    //       <div className="checkout__left">
    //         <img
    //           className="checkout__ad"
    //           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
    //           alt=""
    //         />

    //       <h3>Hello, {user?.email}</h3>
    //       <h2 className="checkout__title">Your shopping Basket</h2>
    //       <FlipMove>
    //       {basket.map(item => (

    //           <CheckoutProduct
    //               key={item.id}
    //               id={item.id}
    //               title={item.title}
    //               image={item.image}
    //               price={item.price}
    //               rating={item.rating}
    //             />


    //           ))}
    //  </FlipMove>
    //       </div>

    //       <div className="checkout__right">
    //         <Subtotal />
    //       </div>

    //     </div>

  )
}

export default Checkout
