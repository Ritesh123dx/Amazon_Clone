import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="card p-3 bg-light shadow mb-1">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')} className="btn btn-warning mt-3 btn-sm shadow">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
