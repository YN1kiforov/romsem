import './../Content.scss';
import React from 'react';
import './ProductList.css'

import { connect } from 'react-redux';
import ProductItem from './ProductItem/ProductItem';
import { AddToCartAC } from './../../../../redux/cart-reducer'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Skeleton } from '@mui/material';


let mapStateToProps = (state) => {
  return {
    cartIsEmpty: state.cartReducer.cartIsEmpty,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (name, price, image) => { dispatch(AddToCartAC(name, price, image)) },
  }
}

function ProductListContainer(props) {

  const [base, setBase] = React.useState(null);
  const [sort, setSort] = React.useState('default');
  const [isLoading, setIsLoading] = React.useState(false);

  let productList = base ? base["itemsList"].concat() : []
  changeProductList()


  const handleChange = (event) => {
    setSort(event.target.value);
  }

  React.useEffect(() => {
    fetch(props.fetchUrl).then(
      (res) => res.json()
    ).then(
      (res1) => {
        setBase(res1[0])
        setIsLoading(true)
      }
    )
  }, [])

  function changeProductList() {
    switch (sort) {
      case 'ascending':
        productList.sort((obj, obj1) => obj['price'] - obj1['price'])
        break
      case 'descending':
        productList.sort((obj, obj1) => obj1['price'] - obj['price'])
        break
      default:
        productList = base ? base["itemsList"].concat() : []
    }
  }
  return (
    <div className="product-list container">
      <div className='top'>
        <div className='title'>{isLoading ? base.name : <Skeleton variant="rectangular" width={180} height={32}></Skeleton>}</div>
        <FormControl className='select' variant="standard" sx={{ m: 2, minWidth: 190 }}>
          <InputLabel className='select' id="select-label">Сортировка</InputLabel>
          <Select
            labelId="2121"
            id="select-standard"
            value={sort}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem className='select-item' value={'default'}>По умолчанию</MenuItem>
            <MenuItem className='select-item' value={'ascending'}>Сначала дешёвые</MenuItem>
            <MenuItem className='select-item' value={'descending'}>Сначала дорогие</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='list'>
        {isLoading ?
          productList.map((obj) => {
            return <ProductItem img={obj['img']} name={obj['name']} info={obj['info']} price={obj['price']} addToCart={props.AddToCart} cartIsEmpty={props.cartIsEmpty}></ProductItem>
          })
          : (<>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
            <Skeleton variant="rectangular" width={292} height={395}></Skeleton>
          </>
          )
        }
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
