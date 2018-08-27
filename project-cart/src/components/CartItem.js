import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div
            className="btn-group radio-group"
            data-toggle="buttons"
          >
            <label className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
                   onClick={ () => this.onSubQuantity(item.product)}
                                  >
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
                   onClick={ () => this.onAddQuantity(item.product)}
                                  >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            onClick = { () => this.onRemoveCart(item) }
          >
            X
          </button>
        </td>
      </tr>
    ); 
  }
  showSubTotal = (price, quantity) =>{
    return price*quantity;
  }
  onRemoveCart = (product) =>{
    this.props.onRemoveCart(product);
  }
  onAddQuantity = (product) =>{
    this.props.onAddQuantity(product)
  }
  onSubQuantity = (product) =>{
    this.props.onSubQuantity(product)
  }
  
}

export default CartItem;
