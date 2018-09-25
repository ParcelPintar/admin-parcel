import axios from 'axios'

class Orders {
  static getOrders(){
    return(dispatch) =>{
      dispatch({type: 'GET_ORDERS_REQUEST'})
      axios.get('https://parcelpintarapi.joanlamrack.me/orders')
      .then(orders=>{
        dispatch({type:'GET_ORDERS_SUCCESS', payload: orders.data})
      })
      .catch(err=>{
        dispatch({type:'GET_ORDERS_FAILED', payload: err})
      })
    }
  }
  static getOrder(id){
    return(dispatch) =>{
      dispatch({type: 'GET_ORDER_REQUEST'})
      axios.get(`https://parcelpintarapi.joanlamrack.me/orders`)
      .then(order=>{
        let epIdArr = []
        order.data.episode.forEach(episode=>{
          let epSplit = episode.split('/')
          epIdArr.push(epSplit[5])
        })
        axios.get(`https://parcelpintarapi.joanlamrack.me/orders`)
        .then(ep=>{
          dispatch({type:'GET_ORDER_SUCCESS', payload: {data: order.data, episode: ep.data}})
        })
      })
      .catch(err=>{
        dispatch({type:'GET_ORDER_FAILED', payload: err})
      })
    }
  }
}

export default Orders
