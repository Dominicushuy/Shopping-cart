import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/containerProducts";

class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header></Header>
        <ProductsContainer></ProductsContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
