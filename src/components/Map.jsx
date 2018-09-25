import React, {Fragment} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: []
    }
  }
  getMarkers(){
    let markers = []
    console.log('rogu desu',this.props.logs);
    this.props.logs.logs.forEach(log=>{
      markers.push({lat: log.lat, lng: log.long})
    })
    console.log('makaa desu',markers);
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
          this.props.logs.loading ? (<h1>loading</h1>) :
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
