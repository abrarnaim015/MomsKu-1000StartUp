import "react-native-get-random-values";
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import qoreContext from "./qoreContext"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./pages/login"
import HomePage from "./pages/home"

export default function App({navigation}) {
  const Stack = createStackNavigator()

  useEffect( async () => {
    const TokenUser = await AsyncStorage.getItem('token')
    if(!TokenUser) {
      navigation.navigate('Login')
    } else {
      navigation.navigate('Home')
    }
  }, [])

  return (
    <>
      <qoreContext.context.Provider value={{ client: qoreContext.client }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
        </Stack.Navigator>
        </NavigationContainer>
      </qoreContext.context.Provider>
    </>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
