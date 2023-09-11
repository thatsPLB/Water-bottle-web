const getStoreCart = ()=>{
    const StoredCartString = localStorage.getItem('cart')
    if(StoredCartString){
        return JSON.parse(StoredCartString)
    }
    return[];
}

const saveCartTOLS = cart =>{
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStingified)
}
const addToLS = id =>{
    const cart = getStoreCart();
    cart.push(id);
    saveCartTOLS(cart);
}
export{addToLS}