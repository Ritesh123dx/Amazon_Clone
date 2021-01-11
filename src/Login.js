import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        alert("Use :\n email : test@gmail.com \n Password : test123 \n 'Create Your Amazon account' button is disabled to restrict unnecessary spamming.");
    }, [])

    const signIn = (e) => {
        e.preventDefault();
        //Some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        //Some fancy firebase login
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Successfully created new user
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }


    
    return (
        
        <div className="container-fluid login__bg bg-info " style={{ height: '100vh' }}>
            <div className="row " >
                <div className="col-12 text-center d-flex justify-content-center">
                    <div class="card mt-5 rounded shadow" style={{ width: '24rem' }}>
                        <div class="card-body">
                            <img
                                className="login__logo"
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                            />

                            <form>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>



                                <button type='submit' onClick={signIn} className='btn btn-warning w-50 shadow mb-3'>Sign In</button>
                            </form>
                            <hr />

                            <p>
                                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                             </p>

                            <button disabled={true} onClick={register} className='btn btn-secondary shadow'>Create your Amazon Account</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        // <div className="login">
        //     <Link to="/">
        //         <img
        //             className="login__logo"
        //             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        //         />
        //     </Link>

        //     <div className='login__container'>
        //         <h1>Sign-in</h1>

        //         <form>
        //             <h5>E-mail</h5>
        //             <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

        //             <h5>Password</h5>
        //             <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

        //             <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        //         </form>

        //         <p>
        //             By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        //             see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        //         </p>

        //         <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        //     </div>
        // </div>
    )
}

export default Login
