import React from 'react';
import Onboarding from './components/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import OnboardingGet from './components/Onboarding/OnboardingGet';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingGet" component={OnboardingGet} options={{ headerShown: false }}/>
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>*/
  );
};

export default App;
