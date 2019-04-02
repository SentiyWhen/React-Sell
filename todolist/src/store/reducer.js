import { ADD_LIST, DEL_ITEM, INPUT_CHANGE, ALL_LIST } from './actionType';

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
    case ALL_LIST:
      let newState3 = JSON.parse(JSON.stringify(state));
      newState3.list = action.data;
      return newState3;
    default:
      
    return state
  }
}