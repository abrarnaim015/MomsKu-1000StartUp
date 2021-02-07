import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Image, ImageBackground } from "react-native";
import qoreContext from "../qoreContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationHelpersContext } from '@react-navigation/native';

function LoginPage({navigation}) {
  // const { data: DataAllMember } = qoreContext.view("allMember").useListRow()
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

  // const handleLogout = () => {
  //   localStorage.clear()
  // }
  
  const handleSubmitLogin =  async () => {
    try {
      const token = await client.authenticate(
        dataLogin.Email.toLowerCase(),
        dataLogin.Password
      );
        await AsyncStorage.setItem('token', token)
        navigation.navigate('Home')
        setDataLogin({
          Email: '',
          Password: ''
        })
    } catch (error) {
      Alert.alert('asalahhh pas')
      console.log(error)
    }
  }

  
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../img/bg2Momsku.jpg')} style={styles.bgLogin}>
          <View style={styles.itemLogo}>
            <View style={{ marginBottom: 20 }}>
              <Image
                source={require('../img/logo.png')}
              />
            </View>
            <Text style={{ color: 'white', marginBottom: 5 }}>Sewa Perlengkapan Bayi & Ibu Menyusui</Text>
            <Text style={{ color: 'white' }}>Dari Ibu untuk Ibu</Text>
          </View>
          <View style={styles.boxLogin}>
            <Separator />
              <TextInput
                  style={styles.textInput}
                  onChangeText={text => handleOnchange({value:text, name:'Email'})}
                  value={dataLogin.Email}
                  placeholder={'Email'}
              />
              <TextInput
                  style={styles.textInput}
                  onChangeText={text => {handleOnchange({value:text, name:'Password'})}}
                  secureTextEntry={true}
                  value={dataLogin.Password}
                  placeholder={'Password'}
              />
            <Separator />
            <View style={styles.btn}>
              <Button
                  title="MASUK"
                  color={'#F97897'}
                  onPress={() => handleSubmitLogin()}
              />
            </View>
            <View>
              <Text style={styles.lupaSandi}>Lupa Kata sandi ?</Text>
            </View>
          </View>
          <View>
            <View style={styles.textRegis}>
              <Text style={{ textAlign: 'center' }}>Belum pernah mendaftar?   <Text style={{textAlign: 'center', color: '#F97897'}}>Silahkan daftar di sini</Text></Text>
            </View>
            <View style={styles.boxBigContak}>
              <View style={styles.boxContak}>
                <View>
                  <Image
                    source={require('../img/tentang.jpg')}
                    style={styles.imgContak}
                  />
                  <Text style={styles.textContak}>Tentang Kami</Text>
                </View>
                <View>
                  <Image
                    source={require('../img/kontak.jpg')}
                    style={styles.imgContak}
                  />
                  <Text style={styles.textContak}>Hubungi Kami</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column"
    },
    bgLogin: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center',
      width: '100%'
    },
    textInput: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: "#F4F4F4",
        textAlign: 'center',
        marginBottom: 10
    },
    separator: {
        marginVertical: 8,
    },
    btn: {
        width: 250,
        height: 50,
        display: 'flex',
        marginBottom: 5,
        borderRadius: 5
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
    boxLogin: {
      backgroundColor: 'white',
      width: 300,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    lupaSandi: {
      color: '#F97897',
      marginBottom: 15
    },
    itemLogo: {
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 50
    },
    textRegis: {
      marginTop: 20,
      textAlign: 'center',
      // marginBottom: 30
    },
    regis: {
      color: '#F97897'
    },
    boxContak: {
      flexDirection: 'row',
      marginTop: 30
    },
    imgContak: {
      width: 28,
      height: 18,
      marginHorizontal: 70,
      alignItems: 'center'
    },
    textContak: {
      textAlign: 'center',
      marginTop: 10
    },
    boxBigContak: {
      // height: 100,
      // alignItems: 'center',
      // justifyContent: 'center'
    }
})

export default LoginPage