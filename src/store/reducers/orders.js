const initialState = {
  loading: false,
  error: false,
  data: []
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_ORDERS_SUCCESS':
      return {
        error: null,
        loading: false,
        // data: action.payload.results
      }
    case 'GET_ORDERS_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default orders
