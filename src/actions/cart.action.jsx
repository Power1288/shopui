export const ADD_ITEM_CART = "ADD_ITEM_CART";


export const addItem = (item) => {
    return (dispatch) => {
        console.log(item)
        return dispatch({type:ADD_ITEM_CART, payload:{price:item.price, name:item.name,qtty:0}})
    }
}

