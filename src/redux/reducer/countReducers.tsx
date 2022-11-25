import {CounterConstant} from '../constants/Constatnts';

const initialState: number = 0;

interface actionType {
  type: string;
  payload: number;
}

const counterReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case CounterConstant.INCREMENT:
      return state + action.payload;
    case CounterConstant.DECREMENT:
      return state - action.payload;
    case CounterConstant.RESET:
      return (state = 0);
    default:
      return state;
  }
};
export default counterReducer;
