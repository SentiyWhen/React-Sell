const defaultState = {
  value: '',
  list: [],
  show: true
}

export const reducerName = (state = defaultState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return 
    default:
      return state
  }
}