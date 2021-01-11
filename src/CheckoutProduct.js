import React, { forwardRef } from 'react';

import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


const CheckoutProduct = forwardRef(({id, image, title, price, rating}, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,

        })
    }

    return (

        <div ref={ref} className="row mt-5">
            <div className="col-12 col-sm-12 col-md-3 text-center">
                <img className="checkoutProduct__image" src={image} />
            </div>
            <div className="col-12 col-sm-12 col-md-9">
                <p>{title}</p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=>(
                     <p>🌟</p>
                 ))}
             </div>
                <p>$ <strong>{price}</strong></p>
                <button className="btn btn-sm btn-warning shadow" onClick={removeFromBasket}>Remove from basket</button>
                <hr />
            </div>
            
        </div>


        // <div ref={ref} className="checkoutProduct mt-5">
        //     <img className="checkoutProduct__image" src={image} />

        //     <div className="checkoutProduct__info">
        //         <p className="checkoutProduct__title">{title}</p>
        //         <p className="checkoutProduct__price">
        //             <small>$</small>
        //             <strong>{price}</strong>
        //         </p>
        //         <div className="checkoutProduct__rating">
        //             {Array(rating).fill().map((_, i)=>(
        //                 <p>🌟</p>
        //             ))}
        //         </div>
        //         <button className="btn btn-sm btn-warning" onClick={removeFromBasket}>Remove from basket</button>

        //     </div>

        // </div>
    )
});

export default CheckoutProduct
