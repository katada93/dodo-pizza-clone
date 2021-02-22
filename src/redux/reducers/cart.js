import produce from "immer"

const initialState = localStorage.length ? JSON.parse(localStorage.getItem('cart-state')) : {
  items: {},
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      if (!draft.items.hasOwnProperty(action.payload.id)) {
        draft.items[action.payload.id] = { item: action.payload, count: 1, price: action.payload.price }
        draft.totalCount += 1
        draft.totalPrice += action.payload.price
      } else {
        draft.items[action.payload.id].count += 1
        draft.items[action.payload.id].price += action.payload.price
        draft.totalCount += 1
        draft.totalPrice += action.payload.price
      }
      break
    }
    case 'PLUS_CART_ITEM': {
      draft.items[action.payload.id].count += 1
      draft.items[action.payload.id].price += action.payload.price
      draft.totalCount += 1
      draft.totalPrice += action.payload.price
      break
    }
    case 'MINUS_CART_ITEM': {
      if (draft.items[action.payload.id].count > 1) {
        draft.items[action.payload.id].count -= 1
        draft.items[action.payload.id].price -= action.payload.price
        draft.totalCount -= 1
        draft.totalPrice -= action.payload.price
      } else {
        delete draft.items[action.payload.id]
        draft.totalCount -= 1
        draft.totalPrice -= action.payload.price
      }
      break
    }
    case 'REMOVE_CART_ITEM': {
      draft.totalCount -= action.payload.count
      draft.totalPrice -= action.payload.totalPrice
      delete draft.items[action.payload.id]
      break
    }
    case 'CLEAR_CART': {
      draft.items = {}
      draft.totalCount = 0
      draft.totalPrice = 0
      break
    }
  }
}, initialState)

export { cartReducer }