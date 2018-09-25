import axios from 'axios'

class Logs {
  static getLogs(orderId){
    return(dispatch) =>{
      dispatch({type: 'GET_LOGS_REQUEST'})
      axios.get('https://parcelpintarapi.joanlamrack.me/logs')
      .then(logs=>{
        let orderLog = []
        logs.data.data.forEach(log=>{
          if (log.orderId === orderId) {
            log.newDate = new Date(log.createdAt)
            orderLog.push(log)
          }
        })
        dispatch({type:'GET_LOGS_SUCCESS', payload: {data: logs.data, logs: orderLog}})
      })
      .catch(err=>{
        dispatch({type:'GET_LOGS_FAILED', payload: err})
      })
    }
  }
}

export default Logs
