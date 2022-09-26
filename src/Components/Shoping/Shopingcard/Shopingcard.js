import React from 'react';

const Shopingcard = ({ product,handalAddToCard }) => {
    const {name ,img ,price, ratings, seller} = product;
    return (
        <div className="col">
            <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">price : {price}</p>
                    <p><small>ratings: {ratings}</small></p>
                    <p><small>seller: {seller}</small></p>
            </div>
                    <button onClick={()=>handalAddToCard(product)} className='btn py-3 btn-secondary'> Add To Card</button>
            </div>
        </div>
    );
};

export default Shopingcard;