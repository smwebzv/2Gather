/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import 'react-native-gesture-handler'
import React from "react";
import { Provider } from 'react-redux'
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from "./src/redux/store/StoreConfiguration";

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackNavigator/>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
