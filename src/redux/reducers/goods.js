const initialState = {
  items: {},
  loading: true,
}

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOODS':
      return {
        ...state,
        items: { ...state.items, [action.payload.name]: [...action.payload.items] },
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}

export { goodsReducer }