import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingGet from '../screens/Onboarding/OnboardingGet';
import PersonalInfo from '../screens/PersonalInfo/PersonalInfo';

const Stack = createNativeStackNavigator()

const ProfileNavigation = () => {

    return (
        <>
        <Stack.Navigator>
            <Stack.Screen name="OnboardingGet" component={OnboardingGet} options={{ headerShown: false }}/>
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </>
    )
}

export default ProfileNavigation;