import { combineReducers } from "redux";
import products from "./Products";
import cart from "./Cart"

const appReducers = combineReducers({
    products,
    cart
})

export default appReducers;