import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, Alert } from "react-native";
import qoreContext from "../qoreContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({navigation}) {
  const { data: DataAllMember } = qoreContext.view("allMember").useListRow()
  const client = qoreContext.useClient();
  const Separator = () => (
    <View style={styles.separator} />
    );

  const [dataLogin, setDataLogin] = React.useState({
    Email: '',
    Password: ''
  });

  function handleOnchange(dataValue) {
    let key = dataValue.name
    let value = dataValue.value
    setDataLogin({
      ...dataLogin,
      [key]: value
    })
  }

  const handleLogout = () => {
    // localStorage.clear()
  }
  
  const handleSubmitLogin =  async () => {
    try {
      const token = await client.authenticate(
        dataLogin.Email,
        dataLogin.Password
      );
      await AsyncStorage.setItem('token', token)
      navigation.navigate('Home')

    } catch (error) {
      Alert.alert('asalahhh pas')
      console.log(error)
    }
  }

  
  return (
    <>
      <View style={styles.container}>
        <Text>Sewa Perlengkapan Bayi & Ibu Menyusui</Text>
        <Text>Dari Ibu untuk Ibu</Text>
        <Separator />
          <Text>Email</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={text => handleOnchange({value:text, name:'Email'})}
          />
          <Text>Password</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={text => {handleOnchange({value:text, name:'Password'})}}
              secureTextEntry={true}
          />
        <Separator />

        <View style={styles.btn}>
          <Button
              title="MASUK"
              color="#f194ff"
              onPress={() => handleSubmitLogin()}
          />
          <Button
              title="KELUAR"
              color="#f194ff"
              onPress={() => handleLogout()}
          />
        </View>
        {/* <Image
            style={styles.tinyLogo}
            source={require("../img/tentang.jpg")}
        />
        <Image
            style={styles.tinyLogo}
            source={require("../img/kontak.jpg")}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: "white",
        textAlign: 'center'
    },
    separator: {
        marginVertical: 8,
    },
    btn: {
        width: 200,
        height: 50,
        color: "#FE7998",
        display: 'flex'
    },
    tinyLogo: {
        width: 30,
        height: 30,
    }

})

export default LoginPage