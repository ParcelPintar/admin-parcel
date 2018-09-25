import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';

export default class DetailTable extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Parcel ID</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1@$4oihoho12123jp</td>
            <td className="text-info">Pickup</td>
            <td className="text-info">Pickup</td>
            <td className="text-info">Pickup</td>
            <td><Link to={`/order/123`}><Button color="warning">Maps</Button></Link></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
