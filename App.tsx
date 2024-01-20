import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import initialStates from './src/redux/store/initialStates';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Navigators from './src/navigators';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const {store} = configureStore(initialStates);

  return (
    <Provider store={store}>
    <Navigators />
  </Provider>
  );
};

export default App;
