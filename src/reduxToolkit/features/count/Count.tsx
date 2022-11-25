import {View, Text, Button} from 'react-native';
import React from 'react';
import {CounterConstant} from '../../../redux/constants/Constatnts';
import styles from './countStyles';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from './countSlice';
import {RootState} from '../../store/store';

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const color = useSelector((state: RootState) => state.theme.color);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title={CounterConstant.INCREMENT}
        onPress={() => dispatch(increment(5))}
      />
      <Text style={[styles.countText, {color: color}]}>Count: {count}</Text>
      <Button
        title={CounterConstant.DECREMENT}
        onPress={() => dispatch(decrement())}
      />
      <View style={styles.byAmount}>
        <Button
          title={CounterConstant.INCREMENTBYAMOUNT}
          onPress={() => dispatch(incrementByAmount(10))}
        />
      </View>
    </View>
  );
};

export default CounterApp;
