import {View, Text, Button, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {deleteUser, updatedUser} from '../Users';
import styles from './userStyles';

const DisplayUsers = () => {
  const userList = useSelector((state: RootState) => state.users.value);
  const [newName, setNewName] = useState('');
  const dispatch = useDispatch();
  return (
    <View>
      {userList.map((user, index) => {
        return (
          <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator>
              <Text key={index}> {user.name}</Text>
              <TextInput
                placeholder="Please enter new Name"
                onChangeText={text => setNewName(text)}
              />
              <View style={styles.button}>
                <Button
                  title="Update User"
                  onPress={() =>
                    dispatch(updatedUser({id: user.id, name: newName}))
                  }
                />
                <View style={styles.button}>
                  <Button
                    title="Delete User"
                    onPress={() => dispatch(deleteUser({id: user.id}))}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
};

export default DisplayUsers;
