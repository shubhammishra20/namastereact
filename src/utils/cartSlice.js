const { createSlice, current } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
        // mutating the state over here
      state.items.push(action.payload)
    },
    removeItem: state => {
      state.items.pop()
    },
    clearCart: state => {
      console.log(current(state))
      // RTK- Either mutate the existing state or return the new state
     // state.items.length = 0  //[]
     // OR
     return {items: []}
    }
  }
})

export const { addItems, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
