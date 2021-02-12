export const setGoods = (items) => ({
  type: 'SET_GOODS',
  payload: items
})

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
});