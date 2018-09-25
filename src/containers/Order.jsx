import React, { Component } from 'react';
import { connect } from 'react-redux'
import Orders from '../store/actions/Orders'
import Logs from '../store/actions/Logs'
import DataTable from '../components/DetailTable'
import LogTable from '../components/LogTable'
import axios from 'axios'
import Map from '../components/Map'

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
        <br/><br/>
        <h1>Details</h1>
        <DataTable order={this.props.order} date={this.props.order.newDate}/>
        <br/><br/>
        <h1>Shock Map</h1>
          {
            this.props.logs.loading ? (<h1>loading</h1>) :
            <div>
              <Map logs={this.props.logs} lat={this.props.logs.lat} long={this.props.logs.long}/>
            </div>
          }
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1>Shock Logs</h1>
        <LogTable logs={this.props.logs}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Order);
