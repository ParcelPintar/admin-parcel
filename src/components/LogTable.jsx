import React,{Fragment} from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/Table.css';
import loading from '../assets/loading.gif'

export default class LogTable extends React.Component {
  render() {
    return (
      <Table hover>
        {
          this.props.logs.loading ? (<img src={loading} class="loading" alt="loading"/>) :
          this.props.logs.logs.map((log, index)=>{
            return(
              <Fragment>
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
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{log._id}</td>
                    <td>{log.long}</td>
                    <td>{log.lat}</td>
                    <td>{log.newDate.toString().split('G')[0]}</td>
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
