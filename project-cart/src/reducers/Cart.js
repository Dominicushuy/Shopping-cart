import * as types from "../constants/ActionTypes"

let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];
let index = -1;
const cart = ( state = initialState , action ) => {
    var { product, quantity } = action
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state , product)
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.REMOVE_TO_CART:
            index = findIndex(state, product)
            state.splice(index,1)
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.ADD_QUANTITY:
            var indexAdd = findIndex(state, product);
            if(index !== -1){
                state[indexAdd].quantity += 1;
            }
            index = -1;
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.SUB_QUANTITY:
            index = findIndex(state, product);
            if( index !==-1 ){
                if( state[index].quantity > 1){
                    state[index].quantity += -1;
                }
            }
            index = -1;
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state]        
        default: return [...state];
    }
}

var findIndex = (cart , product) =>{
    if(cart.length > 0){
        for(var i = 0; i < cart.length ; i++){
            if( cart[i].product.id === product.id ){
                return index = i;
            }
        }
    }
    return index;
}

export default cart;