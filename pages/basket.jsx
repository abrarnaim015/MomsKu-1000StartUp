import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native'
import CardBasket from '../components/card_basket'
import qoreContext from '../qoreContext'

export default function Basket() {

  const { data: dataUser } = useSelector((state) => state.dataUser)
  const { data: AllDataBasket } = qoreContext.view("allBasket").useListRow()

  const [dataBasket, setDataBasket] = React.useState([])

  useEffect(() => {
    if(AllDataBasket) {
      setDataBasket(AllDataBasket)
    }
  }, [AllDataBasket, dataBasket])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
          {dataBasket.map((idProductIndx) => {
            if(idProductIndx.emailUser === dataUser.email) {
              return (
                <View key={idProductIndx.id}>
                  <CardBasket basketId={idProductIndx.nameProduct}/>
                </View>
              )
            }
          })}
        </View>

        <View style={{ display: 'flex', justifyContent: 'flex-start', marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>Alamat Pengirim</Text>
          <Text style={{ marginBottom: 10 }}>{dataUser.alamat} {dataUser.kodePoss}</Text>
          <TouchableOpacity style={styles.button2} >
              <Text style={styles.text2}>Edit Alamat</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </ScrollView>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: 10  }}>
          <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Text>Total</Text>
            <Text>Ongkos Kirim</Text>
            <Text style={{ fontWeight: 'bold' }}>Grand Total</Text>
          </View>
          <View></View>
          <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Text style={{ textAlign: 'right' }}>IDR 500,000</Text>
            <Text style={{ textAlign: 'right' }}>IDR 25,000</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>IDR 525,000</Text>
          </View>
        </View>
        <View style={{ marginBottom: 10}}>
          <TouchableOpacity style={styles.button} >
              <Text style={styles.text}>LANJUT PEMBAYARAN</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF'
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
    marginHorizontal: 10
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  button2: {
    display: 'flex',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    shadowColor: '#F97897',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#F97897'
  },
  text2: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#F97897',
    fontWeight: 'bold'
  }
})