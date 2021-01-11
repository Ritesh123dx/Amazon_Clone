import React from 'react'

function OrderProduct({item}) {
    return (
          
                <div className="row mt-3">
                <div className="col-12 col-sm-12 col-md-3 text-center">
                    <img className="checkoutProduct__image" src={item.image} />
                </div>
                <div className="col-12 col-sm-12 col-md-9">
                    <p>{item.title}</p>
                    <div className="checkoutProduct__rating">
                        {Array(item.rating).fill().map((_, i)=>(
                         <p>🌟</p>
                     ))}
                 </div>
                    <p>$ <strong>{item.price}</strong></p>
                    
                    <hr />
                </div>
                
            </div>
            
            
           
    )
}

export default OrderProduct
