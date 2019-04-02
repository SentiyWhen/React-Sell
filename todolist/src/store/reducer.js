import { ADD_LIST, DEL_ITEM, INPUT_CHANGE } from './actionType'

const defaultState = {
  value: '',
  list: ['1','2'],
  show: true
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      let newState = JSON.parse(JSON.stringify(state));
      newState.value = action.value;
      return newState;
    case ADD_LIST:
      let newState1 = JSON.parse(JSON.stringify(state));
      newState1.list.push(newState1.value);
      newState1.value = '';
      return newState1;
    case DEL_ITEM:
      let newState2 = JSON.parse(JSON.stringify(state));
      newState2.list.splice(action.index,1);
      return newState2;
    default:
      
    return state
  }
}