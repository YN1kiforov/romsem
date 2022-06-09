import React from 'react';
import ProductListContainer from '../ProductList/ProductListContainer';

function Salad(props) {

  return (
    <ProductListContainer fetchUrl = "https://629432a4a7203b3ed0644aa4.mockapi.io/salad" ></ProductListContainer>
  );
}
export default Salad