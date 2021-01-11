
import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import OrderProduct from './OrderProduct';
import { useStateValue } from './StateProvider';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if(user){
            
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id : doc.id,
                    data : doc.data()
                })))
            ))
        }
        else{
            setOrders([]);
        }
        
       
    }, [user])
    return (
        <div className="container">
            <h1 className="text-center mt-3">Orders Page</h1>
            

            {orders?.map(order => 
                (
                    <div className="card border p-3 shadow rounded mt-3">
                        <p><b>Date of Order :</b> <span className="ml-3">{new Date(order.data.created).toLocaleString()}</span></p>
                        <p><b>Order ID :</b> <span className="ml-3">{order.id}</span></p>
                        <p><b>Amount : </b> <span className="ml-3">$ {order.data.amount}</span></p>
                        <hr />
                        {order.data.basket.map(item => (
                            <OrderProduct item={item} />
                        ))}
                        {console.log(order)}
                    </div>
                )
                
            )}
        </div>
    )
}

export default Orders
