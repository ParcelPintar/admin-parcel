import React,{Fragment} from 'react';
import { Table } from 'reactstrap';
import '../styles/Table.css';
import loading from '../assets/loading.gif'

export default class LogTable extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Time</th>
          </tr>
        </thead>
        {
          this.props.logs.loading ? (<img src={loading} class="loading" alt="loading"/>) :
          this.props.logs.logs.map((log, index)=>{
            return(
              <Fragment key={index}>
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
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
