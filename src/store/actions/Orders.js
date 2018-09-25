import axios from 'axios'
let baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
let radius = `radius=100`
const API_KEY = 'AIzaSyBn1H1x86gDfxe9XutNmhdnafkLsdnhedI'

class Orders {
  static getOrders(token){
    return(dispatch) =>{
      dispatch({type: 'GET_ORDERS_REQUEST'})
      axios.get('https://parcelpintarapi.joanlamrack.me/orders',{
        headers: {
          token: token
        }
      })
      .then(orders=>{
        dispatch({type:'GET_ORDERS_SUCCESS', payload: orders.data})
      })
      .catch(err=>{
        dispatch({type:'GET_ORDERS_FAILED', payload: err})
      })
    }
  }
  static getOrder(id, token){
    return(dispatch) =>{
      dispatch({type: 'GET_ORDER_REQUEST'})
      axios.get(`https://parcelpintarapi.joanlamrack.me/orders/${id}`,{
        headers: {
          token: token
        }
      })
      .then(order=>{
        let newDate = new Date(order.data.createdAt)
        axios.get(`${baseUrl}location=${order.data.destination.lat},${order.data.destination.long}&${radius}&key=${API_KEY}`)
        .then(({data}) => {
          dispatch({type:'GET_ORDER_SUCCESS', payload: {data: order.data, address: data.results[1].vicinity, newDate: newDate.toString().split('G')[0]}})
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err=>{
        dispatch({type:'GET_ORDER_FAILED', payload: err})
      })
    }
  }
}

export default Orders
