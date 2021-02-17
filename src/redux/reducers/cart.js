import produce from "immer"

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = produce((draft, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': {
      const isPizza = action.payload.size !== null

      if (!isPizza) {
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
      }
      else {
        if (!draft.items.hasOwnProperty(action.payload.id)) {
          draft.items[action.payload.id] = [{ item: action.payload, count: 1, price: action.payload.price }]
          draft.totalCount += 1
          draft.totalPrice += action.payload.price
        } else {
          const ind = draft.items[action.payload.id].findIndex(x => x.item.size === action.payload.size && x.item.type === action.payload.type)
          if (ind === -1) {
            draft.items[action.payload.id].push({ item: action.payload, count: 1, price: action.payload.price })
            draft.totalCount += 1
            draft.totalPrice += action.payload.price
          } else {
            draft.items[action.payload.id][ind].count += 1
            draft.items[action.payload.id][ind].price += action.payload.price
            draft.totalCount += 1
            draft.totalPrice += action.payload.price
          }
        }
      }
      break
    }
    case 'PLUS_CART_ITEM': {
      const isPizza = action.payload.size !== null

      if (!isPizza) {
        draft.items[action.payload.id].count += 1
        draft.items[action.payload.id].price += action.payload.price
        draft.totalCount += 1
        draft.totalPrice += action.payload.price
      } else {
        const ind = draft.items[action.payload.id].findIndex(x => x.item.size === action.payload.size && x.item.type === action.payload.type)
        draft.items[action.payload.id][ind].count += 1
        draft.items[action.payload.id][ind].price += action.payload.price
        draft.totalCount += 1
        draft.totalPrice += action.payload.price
      }
      break
    }
    case 'MINUS_CART_ITEM': {
      const isPizza = action.payload.size !== null

      if (!isPizza) {
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
      } else {
        const ind = draft.items[action.payload.id].findIndex(x => x.item.size === action.payload.size && x.item.type === action.payload.type)
        if ((draft.items[action.payload.id][ind].count > 1)) {
          draft.items[action.payload.id][ind].count -= 1
          draft.items[action.payload.id][ind].price -= action.payload.price
          draft.totalCount -= 1
          draft.totalPrice -= action.payload.price
        } else {
          draft.items[action.payload.id].splice(ind, 1)
          draft.totalCount -= 1
          draft.totalPrice -= action.payload.price
        }
      }
      break
    }

  }
}, initialState)

export { cartReducer }