import {SHOW_NEWS} from '../actions/types';
const INITIAL_STATE = {
  news: [],
  signed:null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NEWS:
      return {...state, news:action.payload.data,signed:action.payload.signed };
    default:
      return state;
  }
};