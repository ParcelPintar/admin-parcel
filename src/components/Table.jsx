import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';

export default class DataTable extends React.Component {
  render() {
    return (
      <Table class="table" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Sender</th>
            <th>Reciever</th>
            <th>Address</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1@$4oihoho12123jp</td>
            <td>Pickup</td>
            <td>Maram</td>
            <td>Brian</td>
            <td>Jalan Sultan Iskandar Muda No.7, RT.5/RW.9, Kebayoran Lama Selatan, Kebayoran Lama, RT.5/RW.9, Kby. Lama Sel., Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240</td>
            <td><Link to={`/order/123`}><Button color="secondary">Details</Button></Link></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
