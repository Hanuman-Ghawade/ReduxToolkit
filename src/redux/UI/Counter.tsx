/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrementCount, incrementCount, reset} from '../actions/counterAction';
import styles from './CounterStyles';
import {CounterConstant} from '../constants/Constatnts';
import {RootState} from '../store/store';

const CounterUI = () => {
  const count: number = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.increment}>
      <Button
        title={CounterConstant.INCREMENT}
        onPress={() => dispatch(incrementCount(2))}
      />
      <Text style={{fontSize: 20, textAlign: 'center'}}>Count: {count}</Text>
      <Button
        title={CounterConstant.DECREMENT}
        onPress={() => dispatch(decrementCount(3))}
      />
      <View style={styles.reset}>
        <Button
          title={CounterConstant.RESET}
          onPress={() => dispatch(reset())}
        />
      </View>
    </View>
  );
};

export default CounterUI;
