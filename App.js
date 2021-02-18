import "react-native-get-random-values";
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import Store from './store'
import SyncStorage from 'sync-storage';
import qoreContext from "./qoreContext"
import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import DetailProduct from './pages/detail_product'
import ListDataProdukByCategory from './pages/list_product_by_category'
import Basket from './pages/basket'
import RegisterPage from './pages/register'
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createStackNavigator } from "@react-navigation/stack";
// import React, { useEffect } from 'react';

export default function App({navigation}) {
  // const Stack = createStackNavigator()
  const Stack = createBottomTabNavigator()
  
  useEffect(() => {
    (async () => {
      const data = await SyncStorage.init();
    })()
    // const TokenUser = await AsyncStorage.getItem('token')
    // if(!TokenUser) {
    //   navigation.navigate('Login')
    // } else {
    //   navigation.navigate('Home')
    // }
  }, [])

  return (
    <>
      <qoreContext.context.Provider store={ Store } value={{ client: qoreContext.client }}>
        <Provider store={ Store }>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{ tabBarVisible: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomePage}
              />
              <Stack.Screen
                name="Detail"
                component={DetailProduct}
              />
              <Stack.Screen
                name="List"
                component={ListDataProdukByCategory}
              />
              <Stack.Screen
                name="Basket"
                component={Basket}
              />
              <Stack.Screen
                name="Register"
                component={RegisterPage}
                options={{ tabBarVisible: false }}
              />
          </Stack.Navigator>
          </NavigationContainer>
        </Provider>
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
