const initialState = {
  loading: false,
  error: false,
  data: []
}

const logs = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_LOGS_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload
      }
    case 'GET_LOGS_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default logs
