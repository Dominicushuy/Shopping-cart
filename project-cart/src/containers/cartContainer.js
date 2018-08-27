import React, { Component } from 'react';
import {connect} from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
// import * as Message from './../constants/Message';
import * as actions from "../actions/index"; 

class CartContainer extends Component {
    
    render() {
        let { cart } = this.props
        return (
        <Cart>
            { this.showCartItem(cart) }
            { this.showTotalAmuont(cart) }
        </Cart>
        );
    }

    showCartItem = (cart) => {
        let result = null;
        if(cart.length > 0){
            result = cart.map((item,index) =>{
                return <CartItem    key ={index}
                                    item = {item}
                                    index = {index}
                                    onRemoveCart={this.props.onRemoveCart}
                                    onSubQuantity = {this.props.onSubQuantity}
                                    onAddQuantity = {this.props.onAddQuantity}
                        ></CartItem>
                    
            })
        }
        return result;
    }
    
    showTotalAmuont = (cart) =>{
        var result = null;
        if(cart.length > 0){
         return result = <CartResult cart={cart}/>
        }
    }
}

const mapStateToProps = state =>{
  return {
    cart : state.cart
  }
}
const mapDispatchtoProos = (dispatch , props) => {
    return {
        onRemoveCart : (product) =>{
            dispatch(actions.removeToCart(product));
        },
        onAddQuantity : (product) =>{
            dispatch(actions.addQuantity(product))
        },
        onSubQuantity : (product) =>{
            dispatch(actions.subQuantity(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProos)(CartContainer);
