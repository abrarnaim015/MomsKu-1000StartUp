import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useSelector } from 'react-redux'
import SyncStorage from 'sync-storage'

export default function ProfilePage({ navigation }) {
  const dataUser = useSelector((state) => state.dataUser)
  console.log(dataUser, '<<<<<<<')

  if(!dataUser) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Loading...</Text>
      </View>
    )
  }

  function handleSubmitLogout() {
    SyncStorage.remove('token')
    navigation.navigate('Login', { 
      screen: 'Login'
    })
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
      <View style={styles.boxLogin}>
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>INI PROFILE</Text>
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>Name: <Text>{dataUser.data.fullName}</Text> </Text>
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>Phone: <Text>{dataUser.data.phone}</Text> </Text>
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>Email: <Text>{dataUser.data.email}</Text> </Text>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>Address:</Text>
      <Text style={{ textAlign: 'center', marginBottom: 5 }}>{dataUser.data.alamat}</Text> 
      <Text style={{ textAlign: 'center', marginVertical: 5 }}>Poss Code: <Text>{dataUser.data.kodePoss}</Text> </Text>
        <View style={styles.btn}>
          <Button
              onPress={() => handleSubmitLogout()}
              title="Logout"
              color={'#F97897'}
          />
        </View>
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
    flexDirection: 'column'
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
    paddingVertical: 10,
    marginTop: 30
  },
  btn: {
      width: 250,
      height: 50,
      display: 'flex',
      borderRadius: 5,
      marginTop: 30
  },
})