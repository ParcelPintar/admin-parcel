const initialState = {
  loading: false,
  error: false,
  data: [],
  address: null,
  newDate: null 
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_ORDER_SUCCESS':
      return {
        error: null,
        loading: false,
        data: action.payload.data,
        address: action.payload.address,
        newDate: action.payload.newDate
      }
    case 'GET_ORDER_FAILED':
      return {
        error: true,
        loading: false,
        data: []
      }
    default:
      return state
  }
}

export default order
