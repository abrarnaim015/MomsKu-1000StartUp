import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, Image, SafeAreaView, Alert } from 'react-native'
import SearchableDropdown from "react-native-searchable-dropdown";
import { useSelector, useDispatch } from 'react-redux';
import { setRegisProv, setRegisKab, setRegisKec, setRegisKel,  getKodePoss } from "../store";

export default function RegisterAlamatPage({ navigation, route }) {
  const dispatch = useDispatch()
  const { dataPribadi } = route.params
  useEffect(() => {
    dispatch(setRegisProv())
  }, [dispatch])

  const DataProv = useSelector((state) => state.Reg_Prov)
  const DataKab = useSelector((state) => state.Reg_Kab)
  const DataKec = useSelector((state) => state.Reg_Kec)
  const DataKel = useSelector((state) => state.Reg_Kel)
  const KodePoss = useSelector((state) => state.KodePossRegister)

  const [namJalan, setNamJalan] = React.useState('')

  const [Prov, setProv] = React.useState({
    id: 0,
    name: ''
  })
  const [Kab, setKab] = React.useState({
    id: 0,
    name: ''
  })
  const [Kec, setKec] = React.useState({
    id: 0,
    name: ''
  })
  const [Kel, setKel] = React.useState({
    id: 0,
    name: ''
  })

  function handleProv(dataProv) { 
    dispatch(setRegisKab(dataProv.id))
    setProv({
      id: dataProv.id,
      name: dataProv.name
    })
  }

  function handleKab(dataKab) {
    dispatch(setRegisKec(dataKab.id))
    setKab({
      id: dataKab.id,
      name: dataKab.name
    })
  }

  function handleKec(dataKec) {
    dispatch(setRegisKel(dataKec.id))
    setKec({
      id: dataKec.id,
      name: dataKec.name
    })
  }

  function handleKel(dataKel) {
    dispatch(getKodePoss(`${dataKel.name} ${Kec.name} ${Prov.name}`))
    setKel({
      id: dataKel.id,
      name: dataKel.name
    })
  }

  function handleOnchangeNamaJl(NamaJalanText) {
    setNamJalan(NamaJalanText)
  }
  
  const handleNextregis =  async () => {
    if(Prov.name !== '' && Kab.name !== '' && Kec.name !== '' && Kel.name !== '' && namJalan !== '' ) {
      if(KodePoss !== '') {
        let tampAlamat = `${namJalan}, ${Kel.name}, ${Kec.name}, ${Kab.name}, ${Prov.name}`
        const dataPribadiAlamat = {
          fullName: dataPribadi.fullName,
          alamat: tampAlamat,
          phone: dataPribadi.phone,
          kodePoss: KodePoss,
          email: dataPribadi.email
        }
        navigation.navigate('RegisPassword', { dataPribadiAlamat })
        setNamJalan('')
        setProv({id: 0, name: ''})
        setKab({id: 0, name: ''})
        setKec({id: 0, name: ''})
        setKel({id: 0, name: ''})
      } else {
      Alert.alert('Hi Moms', 'Wait a minute Im looking for your poss code!')
      }
    } else {
      Alert.alert('Hi Moms', 'Sorry Your Data Address is Wrong!')
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
              {/* ================ */}
              <SearchableDropdown
                onItemSelect={(item) => handleProv(item)}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                  height: 40,
                  width: 250,
                  borderRadius: 5,
                  backgroundColor: "#F4F4F4",
                  textAlign: 'center'
                }}
                itemStyle={{
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                }}
                itemTextStyle={{
                  color: '#0D1117',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                value={Prov.name}
                items={DataProv}
                placeholder={Prov.name || 'Provinsi'}
                resetValue={false}
              />
              {/* ================ */}
              {/* ================ */}
              <SearchableDropdown
                onItemSelect={(item) => handleKab(item)}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                  height: 40,
                  width: 250,
                  borderRadius: 5,
                  backgroundColor: "#F4F4F4",
                  textAlign: 'center',
                }}
                itemStyle={{
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                }}
                itemTextStyle={{
                  color: '#0D1117',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                value={Kab.name}
                items={DataKab}
                placeholder={Kab.name || 'Kabupaten'}
                resetValue={false}
              />
              {/* ================ */}
              {/* ================ */}
              <SearchableDropdown
                onItemSelect={(item) => handleKec(item)}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                  height: 40,
                  width: 250,
                  borderRadius: 5,
                  backgroundColor: "#F4F4F4",
                  textAlign: 'center'
                }}
                itemStyle={{
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                }}
                itemTextStyle={{
                  color: '#0D1117',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                value={Kec.name}
                items={DataKec}
                placeholder={Kec.name || 'Kecamatan'}
                resetValue={false}
              />
              {/* ================ */}
              {/* ================ */}
              <SearchableDropdown
                onItemSelect={(item) => handleKel(item)}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                  height: 40,
                  width: 250,
                  borderRadius: 5,
                  backgroundColor: "#F4F4F4",
                  textAlign: 'center',
                  marginBottom: 5
                }}
                itemStyle={{
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                }}
                itemTextStyle={{
                  color: '#0D1117',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                value={Kel.name}
                items={DataKel}
                placeholder={Kel.name || 'Kelurahan'}
                resetValue={false}
              />
              {/* ================ */}
              <TextInput
                onChangeText={(text) => handleOnchangeNamaJl(text)}
                style={styles.textInput}
                value={namJalan}
                placeholder={'Jl. Purwanto No.03 ...'}
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
      marginTop: 20
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
