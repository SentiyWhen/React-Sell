import { getSeller } from "../services/common";
export default {
  namespace: 'common',
  state: {
    seller: {}
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
      });
    },
  },
  effects: {
    *getSeller({ payload }, { call, put }) {
      const res = yield call(getSeller);
      const { code, data } = res;
      if (code === 200) {
        yield put({
          type: 'updateState',
          payload: {
            seller: data
          }
        })
      }
    },
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
