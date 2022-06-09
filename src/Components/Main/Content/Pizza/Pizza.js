import React from 'react';
import ProductListContainer from './../ProductList/ProductListContainer';

function Pizza(props) {

  return (
    <ProductListContainer fetchUrl = "https://6294336363b5d108c186e1b1.mockapi.io/pizza" ></ProductListContainer>
  );
}
export default Pizza