import axios from 'axios'

class Logs {
  static getLogs(){
    return(dispatch) =>{
      dispatch({type: 'GET_LOGS_REQUEST'})
      axios.get('https://parcelpintarapi.joanlamrack.me/logs')
      .then(logs=>{
        dispatch({type:'GET_LOGS_SUCCESS', payload: logs.data})
      })
      .catch(err=>{
        dispatch({type:'GET_LOGS_FAILED', payload: err})
      })
    }
  }
  static getLog(id){
    return(dispatch) =>{
      dispatch({type: 'GET_LOG_REQUEST'})
      axios.get(`https://parcelpintarapi.joanlamrack.me/logs`)
      .then(log=>{
        let epIdArr = []
        log.data.episode.forEach(episode=>{
          let epSplit = episode.split('/')
          epIdArr.push(epSplit[5])
        })
        axios.get(`https://parcelpintarapi.joanlamrack.me/logs`)
        .then(ep=>{
          dispatch({type:'GET_LOG_SUCCESS', payload: {data: log.data, episode: ep.data}})
        })
      })
      .catch(err=>{
        dispatch({type:'GET_LOG_FAILED', payload: err})
      })
    }
  }
}

export default Logs
