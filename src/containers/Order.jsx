import React, { Component } from 'react';
import { connect } from 'react-redux'
import Orders from '../store/actions/Orders'
import DataTable from '../components/Table'

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
        <h1>{JSON.stringify(this.props.orders)}</h1>
        <DataTable/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
