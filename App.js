import "react-native-get-random-values";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import qoreContext from "./qoreContext"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./pages/login"
import HomePage from "./pages/home"

export default function App() {

  const Stack = createStackNavigator()

  return (
    <>
      <qoreContext.context.Provider value={{ client: qoreContext.client }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPage}
            />
            <Stack.Screen
              name="Home"
              component={HomePage}
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
