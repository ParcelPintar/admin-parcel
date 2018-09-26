import React, {Fragment} from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';
import loading from '../assets/loading.gif'

export default class DataTable extends React.Component {
  render() {
    return (
      <Table class="table" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
          {
            this.props.orders.loading ? (<img src={loading} class="loading" alt="loading"/>) :
            this.props.orders.data.map((order, index)=>{
              return(
                <Fragment>
                  <tbody>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{order._id}</td>
                      <td className="text-info">{order.status}</td>
                      <td><Link to={`/order/${order._id}`}><Button color="secondary">Details</Button></Link></td>
                    </tr>
                  </tbody>
                </Fragment>
              )
            })
          }
      </Table>
    );
  }
}
