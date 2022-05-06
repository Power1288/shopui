export const LOAD_CART = "LOAD_CART";


export const loadCart = (items) => {
    return (dispatch) => {
        return dispatch({type:LOAD_CART, payload:items})
    }
}