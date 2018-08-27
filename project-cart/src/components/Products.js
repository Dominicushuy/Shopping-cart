import React, { Component } from 'react';
import Message from "./Message";
import CartContainer from "../containers/cartContainer"


class Products extends Component {

  render() {
    return (
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
              {/* Product */}
             {this.props.children}
            </div>
          </section>
          {/* Message */}
          <Message></Message>
          {/* Cart */}
          <CartContainer></CartContainer>
        </div>  
      </main>
    );
  }
}

export default Products;
