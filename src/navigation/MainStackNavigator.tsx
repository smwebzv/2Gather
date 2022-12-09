import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import ProfileNavigation from './ProfileNavigation';
import { ImageBackground } from 'react-native';

const MainStackNavigator = () => {
    const token = useSelector(state => state.auth.token);
    const profile = useSelector(state => state.auth.profile);
    const navTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      };
    return (
         
       <ImageBackground
        source={require('../assets/backgroundImages/backgroundOne.png')}
        style={{ flex: 1 }}
        resizeMode="cover">
            <NavigationContainer theme={navTheme}>
                {!token ? 
                <AuthNavigation />
                :
                !profile ?
                <ProfileNavigation />
                :
                <AppNavigation />
                }
            </NavigationContainer>
        </ImageBackground>
    )
}

export default MainStackNavigator;

