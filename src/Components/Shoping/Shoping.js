import React, { useEffect, useState } from 'react';
import Shopingcard from './Shopingcard/Shopingcard';
import './Shoping.css'
import Ordercard from './Ordercard/Ordercard';
import { addToDb, getStoreCart } from '../../utilities/utilities';

const Shoping = () => {
    const [products , setProducts] = useState([]);
    const [product , setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        const gerstoreCard = getStoreCart();
        let saveCard = [];
        for (const id in gerstoreCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = gerstoreCard[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            }
        }
        setProduct(saveCard)
    }, [products]);
    const handalAddToCard = (singleproduct) => {
        let newProduct = [];
        const exjest = product.find(product => product.id === singleproduct.id);
        if (!exjest) {
            singleproduct.quantity = 1;
            newProduct = [...product, singleproduct];
        } else {
            const rest = product.filter(product => product.id !== singleproduct.id);
            exjest.quantity = exjest.quantity + 1;
            newProduct = [...rest, exjest];
        }

        setProduct(newProduct)
        addToDb(singleproduct.id)
    }
    return (
                <div className='prant-card-div'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Shopingcard
                            key={product.id}
                            product={product}
                            handalAddToCard={handalAddToCard}
                        ></Shopingcard>)
                    }
                </div>
            <div className='order-card'>
                <Ordercard
                    key={product.id}
                newProduct={product}
                ></Ordercard>
            </div>
      </div>
    );
};

export default Shoping;