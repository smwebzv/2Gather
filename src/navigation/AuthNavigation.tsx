import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Onboarding from '../screens/Onboarding/Onboarding';
import SignUp from '../screens/SignUp/SignUp';
import { ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;