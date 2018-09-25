import React, { Component } from 'react';
import { connect } from 'react-redux'
import Orders from '../store/actions/Orders'
import Logs from '../store/actions/Logs'
import DataTable from '../components/DetailTable'
import LogTable from '../components/LogTable'
import axios from 'axios'

const mapStateToProps = state => {
  return{
    order: state.order,
    logs: state.logs
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getOrder: (id, token) => {
      dispatch(Orders.getOrder(id, token))
    },
    getLogs: (id) => {
      dispatch(Logs.getLogs(id))
    }
  }
}

class Order extends Component {
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
      this.props.getOrder(this.props.match.params.orderId, res.data.token)
      this.props.getLogs(this.props.match.params.orderId)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Home">
        <h1>Details</h1>
        <DataTable order={this.props.order} date={this.props.order.newDate}/>
        <h1>Shock Logs</h1>
        <LogTable logs={this.props.logs}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Order);
