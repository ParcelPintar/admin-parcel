import React, { Component } from 'react';
import { connect } from 'react-redux'
import Orders from '../store/actions/Orders'

const mapStateToProps = state => {
  return{
    orders: state.orders
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getOrders: () => {
      dispatch(Orders.getOrders())
    }
  }
}

class Home extends Component {
  componentDidMount(){
    this.props.getOrders()
  }
  render() {
    return (
      <div className="Home">
        <h1>This will be the admin page</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
