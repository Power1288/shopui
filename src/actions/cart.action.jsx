export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const CLEAR_CART = "CLEAR_CART";


export const addItem = (item) => {
    return (dispatch) => {
        return dispatch({type:ADD_ITEM_CART, payload:{price:item.price, name:item.name,qtty:1}})
    }
}

export const clearCart = (newCart) => {
    return (dispatch) => {
        return dispatch({type:CLEAR_CART,payload:newCart})
    }
}






