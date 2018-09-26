import React, {Fragment} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import loading from '../assets/loading.gif'

export class MapContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: []
    }
  }
  getMarkers(){
    let markers = []
    this.props.logs.logs.forEach(log=>{
      markers.push({lat: log.lat, lng: log.long})
    })
    this.setState({
      markers: markers,
      initialCenter: markers[0]
    })
  }
  componentDidMount(){
    this.getMarkers()
  }
  render() {
    return (
      <Fragment>
        {
          this.props.logs.loading ? (<img src={loading} class="loading" alt="loading"/>) :
          <Map
            google={this.props.google}
            initialCenter={{
              lat: this.props.lat,
              lng: this.props.long
            }}
            zoom={15}
            >
            {
              this.props.logs.loading ? (<h1>loading</h1>) :
              this.props.logs.logs.map((log, index)=>{
                return (
                  <Marker
                    key={index}
                    title={'Shock point'}
                    name={'Shock point'}
                    position={{lat: log.lat, lng: log.long}} />
                )
              })
            }
          </Map>
        }
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBn1H1x86gDfxe9XutNmhdnafkLsdnhedI')
})(MapContainer)
