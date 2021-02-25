import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, Image, SafeAreaView, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import { submitRegister } from "../store";

export default function RegisterPage({ navigation, route }) {
  const dispatch = useDispatch()
  const { dataPribadiAlamat } = route.params

  const [pass1, setPass1] = React.useState('')
  const [pass2, setPass2] = React.useState('')

  function handleOnchangePass1 (valuePass1) {
    setPass1(valuePass1)
  }

  function handleOnchangePass2 (valuePass2) {
    setPass2(valuePass2)
  }

  const handleCheckPassword = async () => {
    try {
      if(pass1 === '' && pass2 === '') {
        throw err
      } else if(pass1 !== pass2) {
        throw err
      } else {
        await handleNextregis()
      }
    } catch (err) {
      Alert.alert('Hi Moms', 'Sorry Your Password Wrong!')
      console.log(err)
    }
  }

  
  const handleNextregis =  async () => {
    await dispatch(submitRegister({
      fullName: dataPribadiAlamat.fullName,
      alamat: dataPribadiAlamat.alamat,
      phone: dataPribadiAlamat.phone,
      kodePoss: dataPribadiAlamat.KodePoss,
      email: dataPribadiAlamat.email,
      kodePoss: dataPribadiAlamat.kodePoss,
      password: pass1,
    }))
    navigation.navigate('SuccessRegis')
    setPass1('')
    setPass2('')
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
                  style={styles.textInput}
                  onChangeText={(text) => handleOnchangePass1(text)}
                  secureTextEntry={true}
                  value={pass1}
                  placeholder={'Password'}
              />
              <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => handleOnchangePass2(text)}
                  secureTextEntry={true}
                  value={pass2}
                  placeholder={'Password'}
              />
            <View style={styles.btn}>
              <Button
                  onPress={() => handleCheckPassword()}
                  title="SUBMIT"
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
  },
  btn: {
      width: 250,
      height: 50,
      display: 'flex',
      borderRadius: 5,
      marginTop: 10
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
