import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import Menu from '../components/Menu/Menu';
import MapScreen from '../screens/MapScreen/MapScreen';


const Stack = createNativeStackNavigator()

const AppNavigation = () => {

    return (
        <>
        <Stack.Navigator>
            <Stack.Screen name="map-screen" component={MapScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Menu/>
        </>
    )
}

export default AppNavigation;