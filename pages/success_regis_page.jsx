import React from 'react'
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { setUserDataLogin } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import qoreContext from "../qoreContext";
import SyncStorage from 'sync-storage';

export default function SuccessRegisPage({ navigation }) {
  const dispatch = useDispatch()
  const client = qoreContext.useClient()
  const emailAndpass = useSelector((state) => state.userRegisLogin)

  const getDataUserLogin = async () => {
    const { data: user } = await client.project.axios.get(`/me`);
    dispatch(setUserDataLogin(user))
  }

  const goToHomeAfterRegis = async () => {
    try {
      const token = await client.authenticate(
        emailAndpass.email,
        emailAndpass.password
      );
      SyncStorage.set('token', token);
      await getDataUserLogin()
      navigation.navigate('HomeTab', { 
        screen: 'Home'
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../img/bg2Momsku.jpg')} style={styles.bgLogin}>
      <View style={styles.itemLogo}>
        <View style={{ marginBottom: 10 }}>
          <Image
            source={require('../img/logo.png')}
          />
        </View>
        <Text style={{ color: 'white', marginBottom: 5 }}>Sewa Perlengkapan Bayi & Ibu Menyusui</Text>
        <Text style={{ color: 'white' }}>Dari Ibu untuk Ibu</Text>
      </View>
      <View style={{ marginVertical: 25 }}>
        <Image
          source={require('../img/success_regis.png')}
          style={{ width: 300, height: 300, marginLeft: -30 }}
        />
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity style={styles.button} onPress={() => goToHomeAfterRegis()}>
            <Text style={styles.text}>MASUK KE HOME</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffff'
  },
  bgLogin: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  itemLogo: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46CDC6',
    shadowColor: '#F97897',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    marginHorizontal: 20
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginHorizontal: 100
  },
})