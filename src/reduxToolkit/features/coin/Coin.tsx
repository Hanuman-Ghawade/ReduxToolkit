import {View, Text} from 'react-native';
import React from 'react';
import styles from './coinStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const Coin = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const color = useSelector((state: RootState) => state.theme.color);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: color}]}>Coin: {count}</Text>
    </View>
  );
};

export default Coin;
