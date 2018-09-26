import React, { Component } from 'react';
import { connect } from 'react-redux'
import Orders from '../store/actions/Orders'
import DataTable from '../components/Table'
import axios from 'axios'

const mapStateToProps = state => {
  return{
    orders: state.orders
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getOrders: (token) => {
      dispatch(Orders.getOrders(token))
    }
  }
}

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: 'admin@gmail.com',
      password: 'admin123'
    }
  }
  componentDidMount(){
    axios.post('https://parcelpintarapi.joanlamrack.me/users/login',{email: this.state.email, password: this.state.password})
    .then(res=>{
      this.props.getOrders(res.data.token)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Home">
        <br/><br/>
        <h1>Parcel Tracker</h1>
        <DataTable orders={this.props.orders}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
