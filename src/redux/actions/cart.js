export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
})

export const plusCartItem = (item) => ({
  type: 'PLUS_CART_ITEM',
  payload: item,
})

export const minusCartItem = (item) => ({
  type: 'MINUS_CART_ITEM',
  payload: item,
})

export const removeCartItem = (item) => ({
  type: 'REMOVE_CART_ITEM',
  payload: item,
})