import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';

export default class DetailTable extends React.Component {
  timeConvert(time){
    let newDate = new Date(time)
    return newDate
  }
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Address</th>
            <th>Order Time</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.order.loading ? (<h1>loading</h1>) :
          <tr>
            <td>{this.props.order.data._id}</td>
            <td>{this.props.order.data.status}</td>
            <td>{this.props.order.address}</td>
            <td>{this.props.date}</td>
          </tr>
        }
        </tbody>
      </Table>
    );
  }
}
