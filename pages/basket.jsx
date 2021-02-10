import React, { useEffect } from 'react'
// import qoreContext from '../qoreContext'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Button, Image } from 'react-native'

export default function() {
  // const { data: AllDataProductByCategory } = qoreContext.view("allProduct").useListRow()
  // const { data: AllDataBasket } = qoreContext.view("allBasket").useListRow()
  // console.log(AllDataBasket, '<<<<<<<<<<<', AllDataProductByCategory, 'XXXXXXXXX')
  const [DataFilter, setDataFilter] = React.useState({
    name: '',
    price: 0,
    total_Hari: 0,
    alamat: '',
    code_Poss: 0,
    image: '',
    startDate: '',
    endDate: '',
    ongkir: 0
  })

  useEffect(() => {
    setDataFilter({
      name: 'Nano Stroller',
      price: 300000,
      total_Hari: 10,
      alamat: 'Serirejo Meguwo No. 18 (Sebelah Bengkel Motor). RT 006 / RW 047, Kel. Maguwoharjo Kec. Depok D.I Yogyakarta, Kab. Sleman.',
      code_Poss: 5282,
      image: '../img/content/2.jpg',
      startDate: '2021-02-09T13:33:06.741Z',
      endDate: '2021-02-28T13:33:06.741Z',
      ongkir: 25000
    })
  }, [])

  function converNum(num) {
    let numToString = num.toString()
    let output = ''
    let acuan = 1
    for(let i = numToString.length-1; i >= 0; i--) {
      if(acuan !== 3) {
        output += numToString[i]
      } else {
        if(i === 0) {
          acuan = 0
          output += numToString[i]
        } else {
          acuan = 0
          output += numToString[i] + '.'
        }
      }
      acuan++
    }
    let finalOutput = output.split('').reverse().join('')
    
    return finalOutput
  }

  function hargaPerPick(priceD, jumHari) {
    let pricePDay = Math.ceil(priceD/7)
    let output = pricePDay * jumHari
    let finalOutput = converNum(output)
    return finalOutput
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {/* <View>
          {AllDataBasket.map((task) => (
            <View>
              <Text>{JSON.stringify(task)}</Text>
              <Text>{'\n'}</Text>
            </View>
          ))}
        </View> */}
        <View>
          <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
              <Image
                source={require('../img/content/4.jpg')}
                style={{ width: 90, height: 90 }}
              />
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.name}</Text>
              <Text>IRD {hargaPerPick(DataFilter.price, DataFilter.total_Hari)}</Text>
              <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>4 Hari</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
              <Image
                source={require('../img/content/2.jpg')}
                style={{ width: 90, height: 90 }}
              />
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.name}</Text>
              <Text>IRD {hargaPerPick(DataFilter.price, DataFilter.total_Hari)}</Text>
              <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>4 Hari</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
              <Image
                source={require('../img/content/3.jpg')}
                style={{ width: 90, height: 90 }}
              />
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.name}</Text>
              <Text>IRD {hargaPerPick(DataFilter.price, DataFilter.total_Hari)}</Text>
              <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>4 Hari</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', padding: 5, marginHorizontal: 15, marginVertical: 20 }}>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
              <Image
                source={require('../img/content/1.jpg')}
                style={{ width: 90, height: 90 }}
              />
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataFilter.name}</Text>
              <Text>IRD {hargaPerPick(DataFilter.price, DataFilter.total_Hari)}</Text>
              <View style={{ width: 80, height: 30, backgroundColor: '#F4F4F4', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>4 Hari</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 500, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA' }}></View>
        </View>

        <View style={{ display: 'flex', justifyContent: 'flex-start', marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>Alamat Pengirim</Text>
          <Text style={{ marginBottom: 10 }}>{DataFilter.alamat} {DataFilter.code_Poss}</Text>
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
            <Text style={{ textAlign: 'right' }}>IDR {converNum(DataFilter.ongkir)}</Text>
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