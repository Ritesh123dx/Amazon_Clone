import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    //dispatch the item to data-layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }

  return (
    <div class="card p-3 mt-2 shadow rounded" >
  <img class=" product__img" src={image} alt="Card image cap" />
  <div class="card-body">
    <p class="card-text">{title}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">
    <div className="product__rating">
           {Array(rating)
             .fill()
            .map(() => (
               <p>🌟</p>
             ))}
         </div>
    </li>
    <li class="list-group-item">$ <strong>{price}</strong></li>
  </ul>
  <div className="text-center mt-3">
    <button className="btn btn-warning btn-sm shadow" onClick={addToBasket}>Add to Basket</button>
    </div>
  
</div>

    //     <div className="product shadow rounded">
    //   <div className="product__info">
    //     <p>{title}</p>
    //     <p className="product__price">
    //       <small>$</small>
    //       <strong>{price}</strong>
    //     </p>
    //     <div className="product__rating">
    //       {Array(rating)
    //         .fill()
    //         .map(() => (
    //           <p>🌟</p>
    //         ))}
    //     </div>
    //   </div>

    //   <img src={image} alt="" />

    //   <button className="btn btn-warning btn-sm shadow" onClick={addToBasket}>Add to Basket</button>
    // </div>
  )
}

export default Product
