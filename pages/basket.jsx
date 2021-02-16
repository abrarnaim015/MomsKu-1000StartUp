import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Button, Image } from 'react-native'
import CardBasket from '../components/card_basket'
// import qoreContext from '../qoreContext'

export default function Basket() {
  const { data: dataUser } = useSelector((state) => state.dataUser)
  console.log(dataUser, '<<<<<<< data user form basket page')
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
          {dataUser.product3.nodes.map((idProductIndx) => {
            if(!idProductIndx) {
              return (
                <View key={idProductIndx.id}>
                  <Text>Sorry Empty list product in your basket</Text>
                </View>
              )
            } else {
              return (
                <View key={idProductIndx.id}>
                  <CardBasket basketId={idProductIndx.id}/>
                </View>
              )
            }
          })}
        </View>

        <View style={{ display: 'flex', justifyContent: 'flex-start', marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>Alamat Pengirim</Text>
          <Text style={{ marginBottom: 10 }}>{dataUser.alamat} {dataUser.kodePoss}</Text>
          <Button
            title='Edit Alamat'
            backgroundColor="#F97897"
          />
        </View>
        <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </ScrollView>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: 10, marginBottom: 20  }}>
          <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Text>Total</Text>
            <Text>Ongkos Kirim</Text>
            <Text style={{ fontWeight: 'bold' }}>Grand Total</Text>
          </View>
          <View></View>
          <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Text style={{ textAlign: 'right' }}>IDR 500,000</Text>
            {/* <Text style={{ textAlign: 'right' }}>IDR {converNum(DataFilter.ongkir)}</Text> */}
            <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>IDR 525,000</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 20
  },
})