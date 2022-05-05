import {ADD_ITEM_CART} from "../actions/cart.action";

const initialState = {
  cart: [],
  total: 0
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_CART:
            const itemFound = false;
            let cart = []

            cart = state.cart.reduce((cartResult, cartItem) => {
                // Si l'item courant correspond à item à ajouter, alors on modifie sa quantité
                if (cartItem.name === action.payload.name) {
                    itemFound = true
                    cartItem.quantity++
                    // On retourne le contenu du panier en plus de l'item courant
                    return cartResult.push(...cartResult, cartItem)
                }
                // On retourne seulement le contenu du panier
                return cartResult;
            }, []);
            // Si l'item n'a pas été trouvé dans le panier, on l'ajoute au tableau
            if (!itemFound) {
                cart.push(...action.payload);
            }

            return {
                cart: cart,
                total: state.total + action.payload.price
            }
        default:
            return state;
    }
}