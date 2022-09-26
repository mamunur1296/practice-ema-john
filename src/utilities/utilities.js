const addToDb = id => {
    let shopingCart = getStoreCart();
    const quentaty = shopingCart[id];
    if (quentaty) {
        const newquentaty = quentaty + 1;
        shopingCart[id] = newquentaty;
    } else {
        shopingCart[id] = 1;
    }
    localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
}
const getStoreCart = () => {
    let shopingCart = JSON.parse(localStorage.getItem("shoping-cart"));
    if (shopingCart === null) shopingCart = {};
    return shopingCart;
};

export { addToDb , getStoreCart};



// const addToDb = id => {
//     let shopingCart = getStoreCart();
//     // let shopingCart = JSON.parse(localStorage.getItem("shoping-cart"));
//     // if (shopingCart === null) shopingCart = {};
//     const quentaty = shopingCart[id];
//     if (quentaty) {
//         const newquentaty = quentaty + 1;
//         shopingCart[id] = newquentaty;
//     } else {
//         shopingCart[id] = 1;
//     }
//     localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
// }



