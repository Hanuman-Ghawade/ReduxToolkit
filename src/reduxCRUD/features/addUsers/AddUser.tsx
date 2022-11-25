import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUsers} from '../Users';
import {RootState} from '../../store/store';

const AddUser = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.users.value);

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={text => setName(text)} />
      <TextInput
        placeholder="userName"
        onChangeText={text => setUserName(text)}
      />
      <Button
        title="Add user"
        onPress={() =>
          dispatch(
            addUsers({
              id: userList[userList.length - 1].id + 1,
              name: name,
              username: username,
            }),
          )
        }
      />
    </View>
  );
};

export default AddUser;
