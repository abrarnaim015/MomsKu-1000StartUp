import "react-native-get-random-values";
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Home, ShoppingBag, User } from "react-native-feather";
import Store from './store'
import SyncStorage from 'sync-storage';
import qoreContext from "./qoreContext"
import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import DetailProduct from './pages/detail_product'
import ListDataProdukByCategory from './pages/list_product_by_category'
import Basket from './pages/basket'
import SortPage from './pages/sort'
import FilterPage from './pages/filter'
import SuccessregisPage from './pages/success_regis_page'
import SharePicture from './pages/sharePic'
import RegisterV2 from './pages/register_v2'
import RegisterAlamatPage from './pages/register_alamat'
import RegisPasswordPage from './pages/register_password'
import ProfilePage from './pages/profile'
// import RegisterPage from './pages/register'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useEffect } from 'react';

export default function App({navigation}) {
  const Stack = createStackNavigator()
  const Tab = createMaterialBottomTabNavigator()
  
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

  const loginStackNavigator = () => {
    return (
      <Stack.Navigator
        headerMode={'none'}
      >
        <Stack.Screen
          name="Login"
          component={LoginPage}
          // options={{ tabBarVisible: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterV2}
          // options={{ tabBarVisible: false }}
        />
        <Stack.Screen
          name="RegisAlamat"
          component={RegisterAlamatPage}
        />
        <Stack.Screen
          name="RegisPassword"
          component={RegisPasswordPage}
        />
        <Stack.Screen
          name="SuccessRegis"
          component={SuccessregisPage}
        />
      </Stack.Navigator>
    )
  }

  const homeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          // headerMode={'none'}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={ListDataProdukByCategory}
          options={{ headerStyle: { backgroundColor: '#46CEC5' }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitle: 'List Product' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailProduct}
          options={{ headerStyle: { backgroundColor: '#46CEC5' }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitle: 'Detai Product' }}
        />
        <Stack.Screen
          name="Sort"
          component={SortPage}
          options={{ headerStyle: { backgroundColor: '#46CEC5' }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitle: 'Sort' }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterPage}
          options={{ headerStyle: { backgroundColor: '#46CEC5' }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitle: 'Filter' }}
        />
        <Stack.Screen
          name="Picture"
          component={SharePicture}
          options={{ headerStyle: { backgroundColor: '#46CEC5' }, headerTintColor: 'white', headerTitleAlign: 'center', headerTitle: 'Share Picture' }}
        />
      </Stack.Navigator>
    )
  }

  const appRunFrint = () => {
    return (
      <Tab.Navigator barStyle={{ backgroundColor: '#ffff' }}>
        <Tab.Screen
          name="HomeTab"
          component={homeStackNavigator}
          options={{ tabBarIcon: Home, tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{ tabBarIcon: ShoppingBag, tabBarLabel: 'My Cart' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{ tabBarIcon: User, tabBarLabel: 'My Accont', tabBarColor: 'red' }}
        />
        {/* <Tab.Screen
          name="Detail"
          component={DetailProduct}
        /> */}
        {/* <Tab.Screen
          name="List"
          component={ListDataProdukByCategory}
        /> */}
        {/* <Tab.Screen
          name="Register"
          component={RegisterPage}
          options={{ tabBarVisible: false }}
        /> */}
      </Tab.Navigator>
    )
  }

  return (
    <>
      <qoreContext.context.Provider store={ Store } value={{ client: qoreContext.client }}>
        <Provider store={ Store }>
          <NavigationContainer>
            <Stack.Navigator barStyle={{ backgroundColor: '#ffff' }} >
              <Stack.Screen
                name="Login"
                component={loginStackNavigator}
                options={{ tabBarIcon: User, tabBarLabel: 'My Accont', tabBarColor: 'red', headerShown: false }}
              />
              <Stack.Screen
                name="HomeTab"
                component={appRunFrint}
                options={{ tabBarIcon: User, tabBarLabel: 'My Accont', tabBarColor: 'red', headerShown: false  }}
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
