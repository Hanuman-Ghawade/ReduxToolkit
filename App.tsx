import React from 'react';
import {Text, View} from 'react-native';
// import UserList from './src/reduxCRUD./features/users/UserList';
// import Register from './src/reduxLogin/auth/Register/Register';
import Gallary from './src/reduxThunk/gallaryUI/Gallary';
// import AddUser from './src/reduxCRUD/features/addUsers/AddUser';
// import DisplayUsers from './src/reduxCRUD/features/displayUsers/DisplayUsers';
//import AddUser from './src/reduxCRUD/features/addUsers/AddUser';
//import DisplayUsers from './src/reduxCRUD/features/displayUsers/DisplayUsers';
// import CounterUI from './src/redux/UI/Counter';
import Coin from './src/reduxToolkit/features/coin/Coin';
import CounterApp from './src/reduxToolkit/features/count/Count';
import Theme from './src/reduxToolkit/features/theme/Theme';
import Home from './src/reduxCart/screen/home/Home';
import Cart from './src/reduxCart/screen/cart/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>

    //<View>
    // {/* <CounterUI /> */}
    // {/* <CounterApp />
    // <Coin />
    // <Theme /> */}
    // {/* <AddUser />
    // <DisplayUsers /> */}
    // {/* <Gallary /> */}
    // {/* <Register /> */}
    // {/* <UserList /> */}
    // {/* </View> */}
  );
};

export default App;
