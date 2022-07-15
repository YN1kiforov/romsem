import Content from './Content'
import { connect } from "react-redux";
import React from 'react';

let mapStateToProps = (state) => {
  return {
    catalogList: state.catalog.catalogList,
  }
}


function ContentContainer() {
  
  return (
    <Content></Content>
  )
}

export default connect(mapStateToProps,{})(ContentContainer)

