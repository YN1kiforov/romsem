import React from 'react';
import ProductListContainer from '../ProductList/ProductListContainer';

function Sushi() {

  return (
    <ProductListContainer fetchUrl="https://629432a4a7203b3ed0644aa4.mockapi.io/sushi" ></ProductListContainer>
  );
}
export default Sushi