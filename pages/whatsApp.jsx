import React, { useEffect } from 'react';
import qoreContext from '../qoreContext'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ImageBackground
} from 'react-native';
import { useSelector } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons';

const WhatAppPage = () => {
  const { data: dataUser } = useSelector((state) => state.dataUser)
  const { data: AllDataBasket } = qoreContext.view("allBasket").useListRow()
  
  const [dataBasketUser, setDataBasketUser] = React.useState([])
  const [MassageWhatsApp, setMassageWhatsApp] = React.useState([])
  const [mobileNumber, setMobileNumber] = React.useState('+6285320071441')

  useEffect(() => {
    fikterDataBasket()
    if(dataBasketUser) {
      getALlDataProduct()
    }
  }, [dataUser, AllDataBasket])
  
  const fikterDataBasket = async () => {
    const dataFilter = await AllDataBasket.filter((dataBasket) => dataBasket.emailUser === dataUser.email)
    setDataBasketUser(dataFilter)
  }

  const getALlDataProduct = async () => {
    let tampNameProduct = ['Hallo Momsku, Mau Order nih! \n']
    await dataBasketUser.forEach((el, i ) => {
      tampNameProduct.push(i+1 + '. ' + el.valueNameProduct + '\n')
    })
    tampNameProduct.push(`\n Name: ${dataUser.fullName}`)
    tampNameProduct.push(`\n Email: ${dataUser.email}`)
    tampNameProduct.push(`\n Address: ${dataUser.alamat}`)
    tampNameProduct.push(' \n Apakah masih Ready Semua Moms ?')
    setMassageWhatsApp(tampNameProduct.join(''))
  }

  const initiateWhatsApp = () => {

    let url =
      'whatsapp://send?text=' + 
      MassageWhatsApp +
      '&phone=' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log(data, 'WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <ImageBackground source={require('../img/bg2Momsku.jpg')} style={styles.bgLogin}>
      <SafeAreaView style={styles.container}>
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
          <Text>{MassageWhatsApp}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() =>  initiateWhatsApp()}>
            <FontAwesome5 style={styles.buttonTextStyle} name="whatsapp" size={24} color="black" />
            {/* <Text style={styles.buttonTextStyle}>
              Send WhatsApp Message
            </Text> */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WhatAppPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#55D142',
    borderRadius: 10
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 100
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  bgLogin: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
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
    padding: 10
  },
  itemLogo: {
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 50
  },
});