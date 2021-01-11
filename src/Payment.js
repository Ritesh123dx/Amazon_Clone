import FlipMove from 'react-flip-move';
import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { db } from './firebase';
import { useHistory } from 'react-router-dom';

function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const [payButton, setPayButton] = useState(false);

    console.log("payButton is ",payButton);
    const confirmOrder = () => {
        setPayButton(true);

        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc("1"+new Date().getTime())
        .set({
            basket : basket,
            amount : getBasketTotal(basket),
            created : new Date().getTime()
        })
        .then(success => {
            console.log('Success in storing to DB')
            setPayButton(false);

            dispatch({
                type : 'EMPTY_BASKET',
            })

            history.push('/orders');
        })
        .catch(error=> alert(error.message))


        
    }
    return (
        <div className="container-fluid">
            <div className="row bg-light border p-3">
                <div className="col-12 text-center">
                    <h3 className="">Checkout ({basket?.length} Items)  </h3>
                </div>
            </div>

            <div className="row p-3">
                <div className="col-6 col-sm-3">
                    <strong>Delivery Address : </strong>
                </div>
                <div className="col-6 col-sm-9">
                    {user?.email}
                    <p>10 Linton Street, Kolkata, WestBengal</p>
                </div>
            </div>
            <hr />

            <div className="row p-3">
                <div className="col-6 col-sm-3">
                    <strong>Review Items & Delivery : </strong>
                </div>
                <div className="col-6 col-sm-9">
                    <FlipMove>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    ))}
                    </FlipMove>
                    
                </div>
            </div>

            <hr />         
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h5>Total Amount : $ {getBasketTotal(basket)}</h5>
                    <button disabled={payButton} onClick={confirmOrder} className="btn btn-warning mb-5 shadow">Confirm & Pay</button>
                    
                </div>
            </div>


            
            
        </div>
    )
}

export default Payment
