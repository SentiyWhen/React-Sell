const defaultState = {
  value: '',
  list: ['1','2'],
  show: true
}

export const reducerName = (state = defaultState, action) => {
  switch (action.type) {
    case 'input_change':
      let newState = JSON.parse(JSON.stringify(state));
      newState.value = action.value;
      return newState;
    case 'add_list':
      let newState1 = JSON.parse(JSON.stringify(state));
      newState1.list.push(newState1.value);
      newState1.value = '';
      return newState1;
    default:
      
    return state
  }
}