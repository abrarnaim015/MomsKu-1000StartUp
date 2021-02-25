import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { insertProductToCart } from '../store'

export default function DetailProduct({ route, navigation }) {
  const { dataDetail, harga } = route.params
  const [DataDetail, setDataDetail] = React.useState({})
  const [statusProduct, setStatusProduct] = React.useState('')
  const [styleStatus, setStyleStatus] = React.useState(true)

  useEffect(() => {
    setDataDetail(dataDetail)
    setStatusProduct(dataDetail.statusProduct)
    if(dataDetail.statusProduct === 'Tersedia') {
      setStyleStatus(true)
    } else {
      setStyleStatus(false)
    }
  }, [dataDetail])

  const submitInsertProducttoCart = async () => {
    try {
      await insertProductToCart(dataDetail)
    } catch (err) {
      console.log(err)
    }
  }
  // function cekDate(start, end) {
  //   const dateStart = new Date(start)
  //   const dateEnd = new Date(end)
  //   const nowDate = new Date()
  //   let output = nowDate > dateStart && nowDate < dateEnd
  //   if(output) {
  //     return 'Tersedia'
  //   } else {
  //     return 'Tidak Tersedia'
  //   }
  // }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={[styleStatus? styles.widthStatusTru : styles.widthStatusFalse]}>
            <View style={[styleStatus? styles.BoxStatusProductTrue : styles.BoxStatusProductFalse]}>
              <Text style={[styleStatus? styles.TextStatusTrue : styles.TextStatusFalse]}>{statusProduct}</Text>
            </View>
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate('Picture', { Picture: DataDetail.image })} >
              <Image
                // source={require('../img/content/2.jpg')}
                source={{uri: DataDetail.image}}
                style={{ width: 350, height: 350 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ justifyContent: 'flex-start', marginRight: 100 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataDetail.name}</Text>
              <Text>{DataDetail.address || 'Kosong dari Qore' }</Text>
              <Text style={{ color: '#E79933', fontSize: 20, fontWeight: 'bold' }}>IRD {harga} / 7 Days</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ marginHorizontal: 50 }}>
                <Text>Start Date</Text>
              </View>
              <View style={{ marginHorizontal: 50 }}>
                <Text>End Date</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ backgroundColor: 'red', height: 30 }}></View>
              <View style={{ backgroundColor: 'yellow', height: 30 }}></View>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => submitInsertProducttoCart()}>
                  <Text style={styles.text}>BOOK</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 30 }}>
            <View style={{ justifyContent: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>Description</Text>
              <Text styl={{ textAlign: 'center' }}>{DataDetail.description}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10
    // paddingTop: StatusBar.currentHeight
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  scrollView: {
    paddingHorizontal: 20
  },
  BoxStatusProductTrue: {
    backgroundColor: '#E2F3E6',
    borderRadius: 20,
    padding: 5
  },
  TextStatusTrue: {
    color: '#6FC783',
    marginHorizontal: 10
  },
  BoxStatusProductFalse: {
    backgroundColor: '#FBD6E6',
    borderRadius: 20,
    padding: 5
  },
  TextStatusFalse: {
    color: '#F85483',
    marginHorizontal: 10
  },
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F97897',
    shadowColor: '#F97897',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  widthStatusTru: {
    marginRight: 235
  },
  widthStatusFalse: {
    marginRight: 200
  }
})