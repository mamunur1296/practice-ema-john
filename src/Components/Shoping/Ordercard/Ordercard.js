import React from 'react';
import './Ordercard.css'

const Ordercard = ({ newProduct }) => {

    let totalPrice = 0;
    let shiping = 0;
    let tax = 0;
    let total = 0;
    let quentaty = 0;
    for (const product of newProduct) {
        quentaty = quentaty + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shiping = shiping + product.shipping * product.quantity;
        tax = totalPrice * 0.1;
        total = totalPrice + shiping + tax;
    }
    tax = tax.toFixed(2);
    return (
        <div className='order-card' >
            <h3 className='text-center'>Order Summary </h3>
            <p>Selected Items: {quentaty} </p>
            <p>Total Price: {totalPrice} </p>
            <p>Total Shipping Charge: ${shiping}</p>
            <p>Tax: ${tax} </p>
            <p>Grand Total: ${total} </p>
        </div>
    );
};

export default Ordercard;