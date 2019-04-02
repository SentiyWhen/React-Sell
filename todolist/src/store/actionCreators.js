import { ADD_LIST, DEL_ITEM, INPUT_CHANGE } from './actionType';

export const addListAction = () => ({
  type: ADD_LIST
})

export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index
})

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value
})