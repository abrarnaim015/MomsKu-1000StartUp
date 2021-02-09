import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'

export default function DetailProduct({ route }) {
  const { dataDetail, harga } = route.params
  const [DataDetail, setDataDetail] = React.useState({})

  useEffect(() => {
    setDataDetail(dataDetail)
  }, [dataDetail])


  function cekDate(start, end) {
    const dateStart = new Date(start)
    const dateEnd = new Date(end)
    const nowDate = new Date()
    let output = nowDate > dateStart && nowDate < dateEnd
    if(output) {
      return 'Tersedia'
    } else {
      return 'Tidak Tersedia'
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {/* <View>
            <Text>{JSON.stringify(DataDetail)}</Text>
          </View> */}
          <View style={{ marginRight: 235, marginTop: 20 }}>
            <View style={styles.BoxStatusProduct}>
              <Text style={styles.TextStatus}>{cekDate(DataDetail.startDate, DataDetail.endDate)}</Text>
            </View>
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Image
              // source={require('../img/content/2.jpg')}
              source={{uri: DataDetail.image}}
              style={{ width: 350, height: 350 }}
            />
          </View>
          <View>
            <View style={{ justifyContent: 'flex-start', marginRight: 100 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{DataDetail.name}</Text>
              <Text>{DataDetail.address}</Text>
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
              <TouchableOpacity style={styles.button}>
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
    paddingTop: StatusBar.currentHeight
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  scrollView: {
    paddingHorizontal: 20
  },
  BoxStatusProduct: {
    backgroundColor: '#E2F3E6',
    borderRadius: 20,
    padding: 5
  },
  TextStatus: {
    color: '#6FC783',
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
})