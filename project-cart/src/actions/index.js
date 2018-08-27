import * as types from "../constants/ActionTypes";

export const addToCart = (product, quantity) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const removeToCart = (product) =>{
    return {
        type : types.REMOVE_TO_CART,
        product
    }
}

export const addQuantity = (product) =>{
    return {
        type : types.ADD_QUANTITY,
        product
    }
}

export const subQuantity = (product) =>{
    return {
        type : types.SUB_QUANTITY,
        product
    }
}