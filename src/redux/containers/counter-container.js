import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter-component';

const mapStateToProps = state => ({
  count: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({type: 'INCREMENT'})},
  decrement: () => { dispatch({type: 'DECREMENT'})},
  reset: () => { dispatch({type: 'RESET'})}
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);