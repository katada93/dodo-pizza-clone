const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state;
  }
}

export { cartReducer }