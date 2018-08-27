import React, { Component } from 'react';
import {connect} from "react-redux";
import Products from "./../components/Products";
import Product from  "../components/Product";
import * as actions from "../actions/index" ;

class ProductsContainer extends Component {
    
    showProduct(products){
        let eleProduct = null;
        let { onAddToCart } = this.props
          if(products.length > 0){
            eleProduct = products.map((product ,index) =>{
              return <Product key={index}
                              product={product}
                              onAddToCart={onAddToCart}
               ></Product>
            })
            return eleProduct;
          }
      }

    render() {
        let  { products } = this.props;
        return (
        <Products  >
            {this.showProduct(products)}
        </Products>
        );
    }
}

const mapStateToProps = state =>{
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch ,props) =>{
  return {
    onAddToCart : (product) =>{
      dispatch( actions.addToCart(product, 1))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
