import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SplashScreen, SignIn} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
