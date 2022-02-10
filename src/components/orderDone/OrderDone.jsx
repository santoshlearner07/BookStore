import React from 'react'
import '../orderDone/OrderDone.scss'
import Header from '../header/Header';
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import orderPlaced from '../../Assests/orderPlaced.jpeg'


function OrderDone() {

    let history = new useHistory();

    const contShopp =()=> {
        history.push('/homepage')
    }

  return (
    <>
    <div>
        <Header />
      <div className="mainContent">
        <img className="image" src={orderPlaced} />
        <div>
          <p className="message">
            Hurray!!! Your order is confirmed! The order id is ( #123456 ).
            Save the order id for further communication.
          </p>
        </div>
        <div className="table">
          <table className="order-table">
            <tr>
              <th className="email">Email Us</th>
              <th>Contact Us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td className="email">santoshwalker719@gmail.com</td>
              <td>+91814961577</td>
              <td>
                42, 14 main 15th Cross, Sector 4, opp to BDA complex near
                Kamarakom restaurent HSR layout Banglore 411014.
              </td>
            </tr>
          </table>
        </div>
        <Button
          style={{
            marginTop: "50px",
            padding: "10px 60px",
            marginBottom: "50px",
          }}
          onClick={contShopp}
          variant="contained"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  </>
);
}

export default OrderDone