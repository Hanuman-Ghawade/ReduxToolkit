import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './registerStyles';
import {useDispatch, useSelector} from 'react-redux';
import {signUpUser} from '../../slice/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    dispatch(signUpUser({name, email, password}));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.rigisterText}>Register</Text>
      <Text style={styles.text}> Name </Text>
      <TextInput
        style={styles.inputText}
        placeholder="please enter your name"
        placeholderTextColor="blue"
        onChangeText={Name => setName(Name)}
      />
      <Text style={styles.text}> Email </Text>
      <TextInput
        style={styles.inputText}
        placeholder="please enter your email"
        placeholderTextColor="blue"
        onChangeText={Email => setEmail(Email)}
      />
      <Text style={styles.text}> Password </Text>
      <TextInput
        style={styles.inputText}
        placeholder="please enter your password"
        placeholderTextColor="blue"
        onChangeText={Password => setPassword(Password)}
        secureTextEntry
      />
      <Button title="Register" onPress={() => register()} />
    </View>
  );
};

export default Register;
