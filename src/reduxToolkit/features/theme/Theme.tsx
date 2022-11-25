import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeFontColor} from './themeSlice';

const Theme = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        placeholder="Enter Color Value"
        onChangeText={text => setColor(text)}
      />
      <Button
        title="Change Text Color"
        onPress={() => dispatch(changeFontColor(color))}
      />
    </View>
  );
};

export default Theme;
