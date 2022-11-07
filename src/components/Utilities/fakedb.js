//use local storage to manage data
const addToDb = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {}
    }


    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    } else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
//remove item from cart

const removeFromDb = id => {
    let storeCart = localStorage.getItem('shopping-cart')
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}
//delete shopping cart

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export { addToDb, removeFromDb, deleteShoppingCart }