import {CounterConstant} from '../constants/Constatnts';

export const decrementCount = (num: number) => {
  return {
    type: CounterConstant.DECREMENT,
    payload: num,
  };
};

export const incrementCount = (num: number) => {
  return {
    type: CounterConstant.INCREMENT,
    payload: num,
  };
};

export const reset = () => {
  return {
    type: CounterConstant.RESET,
  };
};
