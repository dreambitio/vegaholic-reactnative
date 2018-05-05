export const createReducer = (initialState, handlers) =>
  (state = initialState, {type, payload}) => {
    if (handlers.hasOwnProperty(type)) {
      return handlers[type](state, payload)
    } else {
      return state
    }
  }