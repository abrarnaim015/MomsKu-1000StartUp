import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, Image, SafeAreaView, Alert } from 'react-native'

export default function RegisterV2({ navigation }) {

  const [FristName, setFristName] = React.useState('')
  const [LastName, setLastName] = React.useState('')
  const [noTelfon, setNotelfon] = React.useState('')
  const [emailUser, setEmailUser] = React.useState('')

  function handleOnchangeFristName(nameText) {
    setFristName(nameText)
  }

  function handleOnchangeLastName(nameText) {
    setLastName(nameText)
  }

  function handleOnchangeNoTelfon(noTelText) {
    setNotelfon(noTelText)
  }

  function handleOnchangeEmailUser(EmailText) {
    setEmailUser(EmailText.toLowerCase())
  }
  
  function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return (true)
    }
    Alert.alert('Hi Moms', 'Sorry Your Email is Wrong!')
    return (false)
  }

  const handleNextregis =  async () => {
    if(FristName !== '' || LastName !== '' || noTelfon !== '' || emailUser !== '' ) {
      if(ValidateEmail(emailUser)) {
        const dataPribadi  = {
          fullName: `${FristName} ${LastName}`,
          phone: noTelfon,
          email: emailUser
        }
        navigation.navigate('RegisAlamat', {
          dataPribadi
        })
        setFristName('')
        setLastName('')
        setNotelfon('')
        setEmailUser('')
      }
    } else {
      Alert.alert('Hi Moms', 'Sorry Your Data Profile is Wrong!')
    }
  }

  return (
    <>
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
              <TextInput
                onChangeText={(text) => handleOnchangeFristName(text)}
                style={styles.textInput}
                value={FristName}
                placeholder={'Nama Depan'}
              />
              <TextInput
                onChangeText={(text) => handleOnchangeLastName(text)}
                style={styles.textInput}
                value={LastName}
                placeholder={'Nama Blakang'}
              />
              <TextInput
                onChangeText={(text) => handleOnchangeNoTelfon(text)}
                style={styles.textInput}
                value={noTelfon}
                placeholder={'No Telfon'}
                keyboardType={'numeric'}
              />
              <TextInput
                onChangeText={(text) => handleOnchangeEmailUser(text)}
                value={emailUser}
                style={styles.textInput}
                placeholder={'Email'}
              />
            <View style={styles.btn}>
              <Button
                  onPress={() => handleNextregis()}
                  title="NEXT"
                  color={'#F97897'}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
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
  textInput: {
      height: 40,
      width: 250,
      borderRadius: 5,
      backgroundColor: "#F4F4F4",
      textAlign: 'center',
      marginBottom: 10
  },
})
