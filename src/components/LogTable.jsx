import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';

export default class LogTable extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Log ID</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.logs.loading ? (<h1>loading</h1>) :
          this.props.logs.logs.map((log, index)=>{
            return(
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{log._id}</td>
                <td>{log.long}</td>
                <td>{log.lat}</td>
                <td>{log.newDate.toString().split('G')[0]}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    );
  }
}
