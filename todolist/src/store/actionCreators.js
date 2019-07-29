import { ADD_LIST, DEL_ITEM, INPUT_CHANGE, ALL_LIST } from './actionType';
import axios from 'axios';

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

export const getAllListAction = (data) => ({
  type: ALL_LIST,
  data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
    .then(function (res) {
      const data = res.data.data.list;
      const action = getAllListAction(data);
      dispatch(action);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}