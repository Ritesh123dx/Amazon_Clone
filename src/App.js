import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';


function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is ', authUser);

      if (authUser){
        // the user is logged in
        dispatch({
          type : 'SET_USER',
          user : authUser
        });
      } else{
        // when user is logged out
        dispatch({
          type : 'SET_USER',
          user : null
        });
      }
    })
    
  }, []);

  return (
    <Router>
      <div className="app">
      
      
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/orders" >
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/payment" >
            <Header />
            <Payment />
            <Footer />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/" >   
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
